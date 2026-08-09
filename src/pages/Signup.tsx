import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    // Personal
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    // Organization
    orgName: '',
    orgType: 'Pharma',
    department: '',
    // Location
    address: '',
    city: '',
    state: '',
    country: '',
    zip: '',
    // Account
    userType: 'Individual',
    acceptTerms: false,
    // Pricing
    selectedPlan: 'Free'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Validations
    if (!/^\+?[\d\s\-()]{7,20}$/.test(formData.phone)) {
      alert("Please enter a valid phone number (digits and standard symbols only).");
      return;
    }

    if (!/^[A-Za-z0-9\s-]{3,10}$/.test(formData.zip)) {
      alert("Please enter a valid postal/ZIP code (3-10 alphanumeric characters).");
      return;
    }

    if (!formData.acceptTerms) {
      alert("Please accept the Terms & Conditions");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    setIsLoading(true);
    
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }
      
      alert("Sign up successful! Please check your email for verification.");
      navigate('/login');
    } catch (error: any) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const pricingPlans = [
    {
      id: 'Chapters',
      name: 'Chapters',
      desc: 'Selected individual chapters (e.g. Target Biology & Clinical Trial Landscape).',
      price: 'Contact Us',
    },
    {
      id: 'Blocks',
      name: 'Blocks',
      desc: 'Multi-chapter blocks (Chapters 1 to 6: Target Biology, Trials, Failure Attribution, Patent, Payload & Linker).',
      price: 'Contact Us',
    },
    {
      id: 'Full Report',
      name: 'Full Report',
      desc: 'Complete report (All 8 chapters + Appendix reference tables + competitive intelligence).',
      price: 'Contact Us',
    },
    {
      id: 'Enterprise',
      name: 'Enterprise',
      desc: 'Full platform access, multi-user license, custom scenario briefings & full dataset export.',
      price: 'Enterprise',
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white pt-24 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-3xl mx-auto space-y-8 relative z-10 mt-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Create your account
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-purple-400 hover:text-purple-300 transition">
              Sign in here
            </Link>
          </p>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 p-6 sm:p-10 rounded-3xl shadow-2xl">
          {/* Progress Bar */}
          <div className="mb-8 relative">
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-white/10">
              <div style={{ width: `${(step / 3) * 100}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-500"></div>
            </div>
            <div className="flex justify-between text-xs text-slate-400 font-medium">
              <span className={step >= 1 ? "text-purple-400" : ""}>1. Details</span>
              <span className={step >= 2 ? "text-purple-400" : ""}>2. Organization</span>
              <span className={step >= 3 ? "text-purple-400" : ""}>3. Plan</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* STEP 1: Personal & Account */}
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <h3 className="text-xl font-semibold text-white border-b border-white/10 pb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Personal Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
                    <input name="fullName" type="text" required value={formData.fullName} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 outline-none transition-all" placeholder="Dr. Jane Smith" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Email Address</label>
                    <input name="email" type="email" required value={formData.email} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 outline-none transition-all" placeholder="jane@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Contact Number</label>
                    <input name="phone" type="tel" required value={formData.phone} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 outline-none transition-all" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">User Type</label>
                    <select name="userType" value={formData.userType} onChange={handleChange} className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 outline-none transition-all appearance-none">
                      <option value="Individual">Individual</option>
                      <option value="Organization">Organization</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Password</label>
                    <input name="password" type="password" required value={formData.password} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 outline-none transition-all" placeholder="••••••••" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Confirm Password</label>
                    <input name="confirmPassword" type="password" required value={formData.confirmPassword} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 outline-none transition-all" placeholder="••••••••" />
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button type="button" onClick={handleNext} className="btn px-8 py-3 text-sm font-semibold rounded-xl text-white bg-white/10 hover:bg-white/20 transition-all border border-white/10">
                    Next Step
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Organization & Location */}
            {step === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <h3 className="text-xl font-semibold text-white border-b border-white/10 pb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Organization Details</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Organization Name</label>
                    <input name="orgName" type="text" required value={formData.orgName} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500/50 outline-none transition-all" placeholder="Company Inc." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Organization Type</label>
                    <select name="orgType" value={formData.orgType} onChange={handleChange} className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500/50 outline-none transition-all appearance-none">
                      <option value="Pharma">Pharma</option>
                      <option value="Hospital">Hospital</option>
                      <option value="CRO">CRO</option>
                      <option value="Research Institute">Research Institute</option>
                      <option value="University">University</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-300 mb-1">Department (Optional)</label>
                    <input name="department" type="text" value={formData.department} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500/50 outline-none transition-all" placeholder="e.g. Oncology R&D" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white border-b border-white/10 pb-3 mt-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Location Details</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-300 mb-1">Address</label>
                    <input name="address" type="text" required value={formData.address} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500/50 outline-none transition-all" placeholder="123 Science Park" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">City</label>
                    <input name="city" type="text" required value={formData.city} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500/50 outline-none transition-all" placeholder="Boston" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">State/Region</label>
                    <input name="state" type="text" required value={formData.state} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500/50 outline-none transition-all" placeholder="MA" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Country</label>
                    <input name="country" type="text" required value={formData.country} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500/50 outline-none transition-all" placeholder="USA" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Postal/ZIP Code</label>
                    <input name="zip" type="text" required value={formData.zip} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500/50 outline-none transition-all" placeholder="02115" />
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button type="button" onClick={handleBack} className="btn px-8 py-3 text-sm font-semibold rounded-xl text-slate-300 bg-transparent hover:bg-white/5 transition-all border border-white/10">
                    Back
                  </button>
                  <button type="button" onClick={handleNext} className="btn px-8 py-3 text-sm font-semibold rounded-xl text-white bg-white/10 hover:bg-white/20 transition-all border border-white/10">
                    Next Step
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Pricing & Submit */}
            {step === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <h3 className="text-xl font-semibold text-white border-b border-white/10 pb-3 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Select Your Access Tier</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pricingPlans.map(plan => (
                    <div 
                      key={plan.id}
                      onClick={() => setFormData(prev => ({ ...prev, selectedPlan: plan.id }))}
                      className={`cursor-pointer rounded-2xl border p-5 transition-all duration-300 ${formData.selectedPlan === plan.id ? 'bg-purple-900/30 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.2)]' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-lg text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{plan.name}</h4>
                        <span className="bg-white/10 text-xs px-2 py-1 rounded-md text-slate-300 font-mono">{plan.price}</span>
                      </div>
                      <p className="text-sm text-slate-400 leading-relaxed">{plan.desc}</p>
                      {formData.selectedPlan === plan.id && (
                        <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-purple-400">
                          <i className="fas fa-check-circle"></i> Selected
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10 flex items-start gap-3">
                  <div className="mt-1">
                    <input
                      id="acceptTerms"
                      name="acceptTerms"
                      type="checkbox"
                      checked={formData.acceptTerms}
                      onChange={handleChange}
                      className="h-4 w-4 rounded border-white/10 bg-slate-900 text-purple-500 focus:ring-purple-500/50 focus:ring-offset-slate-900"
                    />
                  </div>
                  <label htmlFor="acceptTerms" className="text-sm text-slate-300">
                    I accept the <a href="#" className="text-purple-400 hover:underline">Terms & Conditions</a> and understand that an OTP or Verification Link will be sent to my email.
                  </label>
                </div>

                <div className="flex justify-between pt-4">
                  <button type="button" onClick={handleBack} className="btn px-8 py-3 text-sm font-semibold rounded-xl text-slate-300 bg-transparent hover:bg-white/5 transition-all border border-white/10">
                    Back
                  </button>
                  <button 
                    type="submit" 
                    disabled={isLoading || !formData.acceptTerms}
                    className="btn px-8 py-3 text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:ring-offset-slate-900 shadow-lg shadow-purple-500/20 transition-all disabled:opacity-50"
                  >
                    {isLoading ? "Processing..." : formData.selectedPlan === 'Free' ? "Complete Sign Up" : "Proceed to Payment"}
                  </button>
                </div>
              </div>
            )}

          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
