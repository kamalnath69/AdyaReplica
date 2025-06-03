import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { X, TriangleAlert } from 'lucide-react';
import { RootState, AppDispatch } from '@/store/store';
import { 
  updateField, 
  selectAnnualRevenue, 
  submitForm, 
  clearForm,
  setError,
  clearError 
} from '@/store/slices/scheduleDemoSlice';
import registerBg from '@/assets/webp/RegisterForEarlyAccessBg.webp';
import eyeLogo from '@/assets/svg/eye-logo.svg';

export function ScheduleDemo() {
  const dispatch = useDispatch<AppDispatch>();
  const { 
    formData, 
    selectedRevenue, 
    isSubmitting, 
    error, 
    isSuccess 
  } = useSelector((state: RootState) => state.scheduleDemo);

  const handleInputChange = (field: string, value: string) => {
    dispatch(updateField({ field, value }));
    if (error) dispatch(clearError());
  };

  const handleRevenueSelect = (revenue: string) => {
    dispatch(selectAnnualRevenue(revenue));
    if (error) dispatch(clearError());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.fullName.trim()) {
      dispatch(setError('Full name is required'));
      return;
    }
    if (!formData.workEmail.trim() || !formData.workEmail.includes('@')) {
      dispatch(setError('Valid work email is required'));
      return;
    }
    if (!formData.mobileNumber.trim()) {
      dispatch(setError('Mobile number is required'));
      return;
    }
    if (!formData.companyName.trim()) {
      dispatch(setError('Company name is required'));
      return;
    }
    if (!selectedRevenue) {
      dispatch(setError('Please select annual revenue'));
      return;
    }

    // Dispatch the async thunk
    try {
      await dispatch(submitForm()).unwrap();
      // Success is handled in the reducer
    } catch (error) {
      // Error is handled in the reducer
      console.error('Form submission failed:', error);
    }
  };

  const handleClose = () => {
    dispatch(clearForm());
    // Navigate back or close modal
    window.history.back();
  };

  const revenueOptions = [
    'Less than $10m',
    '$10m - $500m', 
    '$500m+'
  ];

  return (
    <div className="md:max-h-screen md:min-h-[100dvh] w-full flex max-md:flex-col overflow-hidden">
      {/* Left Panel */}
      <div className="md:w-1/2 md:max-h-screen md:min-h-[100dvh] relative">
        <img 
          className="absolute z-[0] h-full w-full scale-105 object-cover" 
          src={registerBg}
          alt="Background"
        />
        <div className="h-full w-full z-[1] flex flex-col justify-between max-md:gap-[148px] px-4 md:px-6 xl:px-10 py-8 md:py-10 xl:py-14 relative">
          <motion.img 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src={eyeLogo}
            alt="Adya Logo"
            className="z-[1] w-12 hover:scale-110 duration-300 cursor-pointer"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[38px] sm:text-[42px] md:text-[55px] lg:text-[63px] xl:text-[72px] font-medium z-[1] font-manrope max-w-[640px] md:self-center leading-[110%]"
            style={{
              color: 'white',
              background: 'linear-gradient(125.83deg, rgb(255, 255, 255) 53.64%, rgb(66, 140, 252) 72.71%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Designed for <br className="md:hidden" />rapid scalability <br className="md:hidden" />and easy <br className="md:hidden" />integration.
          </motion.p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="md:w-1/2 md:max-h-screen md:min-h-[100dvh] flex justify-center items-start bg-white md:overflow-y-auto relative" id="custom-tooltip-parent">
        
        {/* Error Tooltip */}
        {error && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-4 left-4 right-16 bg-[#f8f8ff] text-[#383838] rounded-md border-[#272727] border flex shadow-[3px_2px_5px_2px_#00000030] z-50"
          >
            <div className="bg-[#ec3729]/20 px-4 py-2 border-r border-[#272727] rounded-l-md">
              <TriangleAlert className="text-[#ec3729] text-xl" />
            </div>
            <p className="px-4 py-2 font-nunito font-medium">{error}</p>
          </motion.div>
        )}

        {/* Close Button */}
        <X 
          className="text-4xl text-black absolute top-5 right-5 hover:scale-110 duration-300 cursor-pointer"
          onClick={handleClose}
        />

        <div className="flex justify-center items-center">
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="max-w-[280px] sm:max-w-[460px] md:max-w-[350px] lg:max-w-[415px] xl:max-w-[460px] flex flex-col gap-[30px] md:gap-10 py-[50px]"
          >
            <h1 className="font-manrope font-semibold md:font-medium text-[28px] md:text-[35px] xl:text-[42px] leading-snug md:leading-tight text-[#000000] md:text-[#353535] tracking-tight text-center">
              Register below <br className="md:hidden" />for a Demo
            </h1>

            <div className="flex flex-col gap-5">
              {/* Full Name */}
              <div className="flex flex-col w-full gap-2">
                <label className="text-[#353535] opacity-60 text-sm md:text-base xl:text-lg font-semibold font-nunito">
                  Full Name
                </label>
                <input 
                  className="bg-white text-[#353535] border border-[#353535] rounded-[12px] md:rounded-[14px] xl:rounded-[16px] px-3 py-2 text-lg shadow-[0px_1.16px_2.31px-0px_#0000000D] focus:outline-none focus:ring-2 focus:ring-[#428CFC]/50 h-[42px] md:h-[46px] xl:h-[52px] font-inter font-medium"
                  id="full_name"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                />
              </div>

              {/* Work Email */}
              <div className="flex flex-col w-full gap-2">
                <label className="text-[#353535] opacity-60 text-sm md:text-base xl:text-lg font-semibold font-nunito">
                  Work Email
                </label>
                <input 
                  className="bg-white text-[#353535] border border-[#353535] rounded-[12px] md:rounded-[14px] xl:rounded-[16px] px-3 py-2 text-lg shadow-[0px_1.16px_2.31px-0px_#0000000D] focus:outline-none focus:ring-2 focus:ring-[#428CFC]/50 h-[42px] md:h-[46px] xl:h-[52px] font-inter font-medium"
                  id="work_email"
                  type="email"
                  required
                  value={formData.workEmail}
                  onChange={(e) => handleInputChange('workEmail', e.target.value)}
                />
              </div>

              {/* Mobile Number */}
              <div className="flex flex-col w-full gap-2">
                <label className="text-[#353535] opacity-60 text-sm md:text-base xl:text-lg font-semibold font-nunito">
                  Mobile Number
                </label>
                <div className="flex bg-white border border-[#353535] rounded-[12px] md:rounded-[14px] xl:rounded-[16px] text-lg shadow-[0px_1.16px_2.31px-0px_#0000000D] focus-within:ring-2 focus-within:ring-[#428CFC]/50 h-[42px] md:h-[46px] xl:h-[52px] font-inter font-medium">
                  <span className="font-semibold text-[#353535] opacity-70 ml-3 mr-1.5 self-center">+1</span>
                  <input 
                    className="w-full h-full pl-1.5 px-3 py-2 outline-none border-none bg-transparent rounded-r-[12px] md:rounded-r-[14px] xl:rounded-r-[16px] text-[#353535]"
                    id="mobile_number"
                    type="text"
                    required
                    value={formData.mobileNumber}
                    onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                  />
                </div>
              </div>

              {/* Company Name */}
              <div className="flex flex-col w-full gap-2">
                <label className="text-[#353535] opacity-60 text-sm md:text-base xl:text-lg font-semibold font-nunito">
                  Company Name
                </label>
                <input 
                  className="bg-white text-[#353535] border border-[#353535] rounded-[12px] md:rounded-[14px] xl:rounded-[16px] px-3 py-2 text-lg shadow-[0px_1.16px_2.31px-0px_#0000000D] focus:outline-none focus:ring-2 focus:ring-[#428CFC]/50 h-[42px] md:h-[46px] xl:h-[52px] font-inter font-medium"
                  id="company_name"
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                />
              </div>

              {/* Annual Revenue */}
              <div className="flex flex-col w-full gap-2">
                <label className="text-[#353535] opacity-60 text-sm md:text-base xl:text-lg font-semibold font-nunito">
                  Annual Revenue
                </label>
                <div id="annual_revenue" className="flex flex-wrap gap-3 sm:gap-4">
                  {revenueOptions.map((revenue) => (
                    <button
                      key={revenue}
                      type="button"
                      onClick={() => handleRevenueSelect(revenue)}
                      className={`font-semibold text-[11px] sm:text-[13px] rounded-[15px] py-3 px-5 font-inter whitespace-nowrap duration-300 ${
                        selectedRevenue === revenue
                          ? 'text-white bg-[#428CFC] shadow-lg'
                          : 'text-[#2A528D] bg-[#95C4F14D] hover:bg-[#a6d2ff] hover:shadow-lg'
                      }`}
                    >
                      {revenue}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 justify-center items-center">
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#428CFC] hover:bg-[#427fc4] disabled:bg-gray-400 duration-300 rounded-[20px] text-white py-4 font-bold font-nunito max-sm:mx-[30px] max-sm:text-[15px]"
              >
                {isSubmitting ? 'Scheduling...' : 'Schedule my Demo'}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
}