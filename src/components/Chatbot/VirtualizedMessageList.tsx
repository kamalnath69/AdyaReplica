import React, { useEffect, useRef, useState, useCallback } from 'react';
import { VariableSizeList as List, ListOnItemsRenderedProps } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import { Message } from '../../types/chat';
import { ChatMessage } from './ChatMessage';
import { Sparkles } from 'lucide-react';

interface VirtualizedMessageListProps {
  messages: Message[];
  hasMore: boolean;
  loadMore: () => void;
  isLoading: boolean;
  error?: string | null;
  onRetry?: () => void;
}

export const VirtualizedMessageList: React.FC<VirtualizedMessageListProps> = ({
  messages,
  hasMore,
  loadMore,
  isLoading,
  error,
  onRetry,
}) => {
  const listRef = useRef<List>(null);
  const [itemHeights, setItemHeights] = useState<{ [key: number]: number }>({});
  const itemRefs = useRef<{ [key: number]: HTMLDivElement }>({});
  const resizeObservers = useRef<{ [key: number]: ResizeObserver }>({});
  const previousMessageCount = useRef(0);

  // Reverse messages array to show oldest first (normal chat order)
  const reversedMessages = [...messages].reverse();

  // Calculate item height
  const getItemSize = useCallback((index: number) => {
    return itemHeights[index] || 120;
  }, [itemHeights]);

  // Set item height after render
  const setItemHeight = useCallback((index: number, height: number) => {
    setItemHeights(prev => {
      if (prev[index] !== height) {
        const newHeights = { ...prev, [index]: height };
        if (listRef.current) {
          listRef.current.resetAfterIndex(index);
        }
        return newHeights;
      }
      return prev;
    });
  }, []);

  // Check if item is loaded
  const isItemLoaded = useCallback((index: number) => {
    return !!reversedMessages[index];
  }, [reversedMessages]);

  // Load more items when scrolling to the top (older messages)
  const loadMoreItems = useCallback(async (startIndex: number) => {
    if (startIndex === 0 && hasMore && !isLoading) {
      loadMore();
    }
  }, [hasMore, isLoading, loadMore]);

  // Handle scroll - simplified without using private methods
  const handleScroll = useCallback(() => {
    // Simple scroll detection - we'll rely on auto-scroll behavior instead
    // of complex scroll position calculations
  }, []);

  // Auto-scroll to bottom for new messages
  useEffect(() => {
    if (listRef.current && reversedMessages.length > previousMessageCount.current) {
      // Always scroll to bottom when new messages arrive
      setTimeout(() => {
        if (listRef.current) {
          listRef.current.scrollToItem(reversedMessages.length - 1, 'end');
        }
      }, 100);
    }
    previousMessageCount.current = reversedMessages.length;
  }, [reversedMessages.length]);

  // Initial scroll to bottom
  useEffect(() => {
    if (listRef.current && reversedMessages.length > 0) {
      setTimeout(() => {
        listRef.current?.scrollToItem(reversedMessages.length - 1, 'end');
      }, 200);
    }
  }, []);

  // Cleanup resize observers
  useEffect(() => {
    return () => {
      Object.values(resizeObservers.current).forEach(observer => {
        observer.disconnect();
      });
    };
  }, []);

  // Row renderer
  const Row = useCallback(({ index, style }: { index: number; style: React.CSSProperties }) => {
    const message = reversedMessages[index];
    
    if (!message) {
      return (
        <div style={style}>
          <div className="flex justify-center items-center h-16 px-4">
            <div className="animate-pulse bg-gradient-to-r from-gray-700 to-gray-600 h-12 w-3/4 rounded-lg"></div>
          </div>
        </div>
      );
    }

    return (
      <div style={style}>
        <div
          ref={(el) => {
            if (el) {
              itemRefs.current[index] = el;
              
              // Clean up previous observer if exists
              if (resizeObservers.current[index]) {
                resizeObservers.current[index].disconnect();
              }
              
              // Create new observer
              const resizeObserver = new ResizeObserver((entries) => {
                for (const entry of entries) {
                  const height = entry.contentRect.height;
                  if (height > 0) {
                    setItemHeight(index, height + 8);
                  }
                }
              });
              
              resizeObserver.observe(el);
              resizeObservers.current[index] = resizeObserver;
            } else {
              // Cleanup when element is removed
              if (resizeObservers.current[index]) {
                resizeObservers.current[index].disconnect();
                delete resizeObservers.current[index];
              }
              delete itemRefs.current[index];
            }
            // Don't return anything from callback ref
          }}
        >
          <ChatMessage message={message} />
        </div>
      </div>
    );
  }, [reversedMessages, setItemHeight]);

  if (error) {
    return (
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="text-center">
          <p className="text-red-400 mb-3 font-medium">Failed to load messages</p>
          <button
            onClick={onRetry}
            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-200 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (reversedMessages.length === 0 && !isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="text-center text-blue-200/80">
          <div className="mb-4">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <Sparkles className="w-8 h-8 text-white animate-pulse" />
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Start a conversation
          </h3>
          <p className="text-sm text-blue-300/60 font-medium">
            Ask me anything! I'm here to help.
          </p>
        </div>
      </div>
    );
  }

  const itemCount = reversedMessages.length;

  return (
    <div className="flex-1 overflow-hidden">
      {/* Loading indicator at top for older messages */}
      {isLoading && hasMore && (
        <div className="flex justify-center items-center py-3 border-b border-blue-500/20">
          <div className="flex items-center space-x-2 text-blue-300/80">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
            <span className="text-sm font-medium">Loading older messages...</span>
          </div>
        </div>
      )}

      <InfiniteLoader
        isItemLoaded={isItemLoaded}
        itemCount={hasMore ? itemCount + 1 : itemCount}
        loadMoreItems={loadMoreItems}
      >
        {({ 
          onItemsRendered, 
          ref 
        }: { 
          onItemsRendered: (props: ListOnItemsRenderedProps) => void;
          ref: (list: List | null) => void;
        }) => (
          <List
            ref={(list: List | null) => {
              listRef.current = list;
              ref(list);
            }}
            height={isLoading && hasMore ? 277 : 300}
            itemCount={itemCount}
            itemSize={getItemSize}
            onItemsRendered={onItemsRendered}
            onScroll={handleScroll}
            className="scrollbar-thin scrollbar-thumb-blue-600/50 scrollbar-track-transparent hover:scrollbar-thumb-blue-500/70"
            style={{ direction: 'ltr' }}
          >
            {Row}
          </List>
        )}
      </InfiniteLoader>
    </div>
  );
};