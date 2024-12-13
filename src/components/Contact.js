
const Contact = () => {
  return (
<header>

    <div class="w-full bg-center bg-cover h-56 bg-primary pattern">
        <div class="flex items-center justify-center w-full h-full">
            <div class="mx-auto text-center md:max-w-xl lg:max-w-3xl">
                <h3 class="mb-6 text-3xl font-bold text-slate-900">Get In Touch</h3>
                <p class="mb-6 pb-2 md:pb-0 text-slate-700">
                    We want to hear from you – feel free to reach out at anytime
                </p>

                <div class="text-center">
                    <button className="w-full px-4 py-2 text-sm font-medium text-white transition-colors duration-200 transform bg-primary_dark rounded-md lg:w-auto focus:outline-none">
                    Contact us
                    </button>
                </div>
            </div>
        </div>
    </div>
</header>
  );
};

export default Contact;
