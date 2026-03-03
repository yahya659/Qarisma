export default function CreateAccountForm() {
  return (
    <form
      className="flex flex-col items-center w-full max-w-[999px] 
            bg-white/10 backdrop-blur-lg 
            rounded-[28px] sm:rounded-[38px] 
            p-6 sm:p-8 md:p-10
            border border-white/30 shadow-2xl"
    >
      <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 mb-8 sm:mb-10">
        <div className="w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] md:w-[120px] md:h-[120px] rounded-full overflow-hidden shadow-sm">
          <img
            src="images/logo.png"
            alt="Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-[26px] sm:text-[34px] md:text-[42px] font-bold text-[#2A2A2A] tracking-tight">
          create an account
        </h1>
      </div>

      <div className="w-full space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="text-[16px] sm:text-[18px] md:text-[20px] font-bold ml-2">
              Firstname
            </label>
            <input
              name="firstname"
              required
              placeholder="enter your name"
              className="w-full bg-white/80 py-3 px-5 rounded-2xl border-none text-sm shadow-sm outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[16px] sm:text-[18px] md:text-[20px] font-bold ml-2">
              Lastname
            </label>
            <input
              name="lastname"
              required
              placeholder="enter your name"
              className="w-full bg-white/80 py-3 px-5 rounded-2xl border-none text-sm shadow-sm outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-[16px] sm:text-[18px] md:text-[20px] font-bold ml-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="johnsmith@example.com"
            className="w-full bg-white/80 py-3 px-5 rounded-2xl border-none text-sm shadow-sm outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="text-[16px] sm:text-[18px] md:text-[20px] font-bold ml-2">
              Gender
            </label>
            <select
              name="gender"
              required
              className="w-full bg-white/80 py-3 px-5 rounded-2xl border-none text-sm shadow-sm outline-none focus:ring-2 focus:ring-indigo-400 appearance-none"
            >
              <option value="">select</option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-[16px] sm:text-[18px] md:text-[20px] font-bold ml-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="+12313"
              className="w-full bg-white/80 py-3 px-5 rounded-2xl border-none text-sm shadow-sm outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="text-[16px] sm:text-[18px] md:text-[20px] font-bold ml-2">
              password
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="enter your password"
              className="w-full bg-white/80 py-3 px-5 rounded-2xl border-none text-sm shadow-sm outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[16px] sm:text-[18px] md:text-[20px] font-bold ml-2">
              confirm password
            </label>
            <input
              type="password"
              name="confirmPassword"
              required
              placeholder="enter your password"
              className="w-full bg-white/80 py-3 px-5 rounded-2xl border-none text-sm shadow-sm outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="w-[400px] h-[56px] bg-[#5853D6] 
               text-white font-semibold 
               rounded-full 
               shadow-xl 
               hover:bg-[#4a45b8] 
               transition-all duration-300 
               active:scale-95"
          >
            Create an account
          </button>
        </div>

        <div className="flex items-center justify-center mx-auto w-full max-w-[399px] my-[23px]">
          <div className="flex-1 h-[0.5px] bg-black"></div>
          <span className="px-4 text-[16px] sm:text-[18px] md:text-[20px] text-black font-normal lowercase tracking-wide">
            Or
          </span>
          <div className="flex-1 h-[0.5px] bg-black"></div>
        </div>

        <div className="flex flex-col items-center gap-4 mt-6">
          <p className="text-[16px] sm:text-[18px] md:text-[20px] text-white font-medium mb-4">
            Sign up with
          </p>
          <div className="flex gap-4">
            <button
              type="button"
              className="p-3 bg-white shadow-md border border-[#F178B6] hover:scale-110 transition-transform"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-6 h-6"
                alt="Google"
              />
            </button>
            <button
              type="button"
              className="p-3 bg-white shadow-md border border-[#F178B6] hover:scale-110 transition-transform"
            >
              <img
                src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                className="w-6 h-6"
                alt="Facebook"
              />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
