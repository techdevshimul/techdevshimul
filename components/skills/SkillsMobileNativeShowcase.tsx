export default function SkillsMobileNativeShowcase() {
  return (
    <section className="mb-stack-lg py-stack-lg">
      <div className="text-center mb-12">
        <h2 className="font-headline-md text-headline-md mb-4">
          Mobile Native Showcase
        </h2>
        <p className="text-on-surface-variant font-body-md max-w-xl mx-auto">
          Designing for the thumb. I build cross-platform experiences that feel
          truly native, utilizing optimized animations and system-level
          integrations.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 overflow-hidden py-12">
        {/* <!-- iOS Mockup --> */}
        <div className="relative group cursor-pointer">
          <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="relative w-[280px] h-[560px] bg-charcoal rounded-[40px] border-[8px] border-surface-container-highest shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-surface-container-highest rounded-b-2xl z-20"></div>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAbn0EU1wsaXWO9u4JFcvq6zwxwBDzerui2dl5a0CDt4M_3rUIVnH2qnfY2LquQgzzr7jAxWioZMzl6fUYlWIlQjHu6MtpJzEjdRw8UA_iFtGtCB1kQml4L4UJnYZJi7xeYC5zjJypUVwHVaDy9fcywEKgpDHE_pWcsan-YbaB2Xk4wUJ4LxVV7DcuBkfzgxhHYsLABNpLlX1qyKFzcJcnsbLr9T_dYtVexUouZ7UuKBT4WQRQTXCqZC1_LE2VCun0wv0fpi7YfL47r")`,
              }}
            ></div>
          </div>
          <div className="mt-6 text-center">
            <span className="font-headline-sm text-headline-sm block">
              Vanguard iOS
            </span>
            <span className="text-on-surface-variant font-label-md">
              Financial Dashboard Platform
            </span>
          </div>
        </div>
        {/* <!-- Android Mockup --> */}
        <div className="relative group cursor-pointer md:mt-24">
          <div className="absolute -inset-4 bg-secondary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="relative w-[280px] h-[560px] bg-charcoal rounded-[24px] border-[8px] border-surface-container-highest shadow-2xl overflow-hidden">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-surface-container-highest rounded-full z-20"></div>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCUp-MMtwB0JPquIyOSd_JoxmHXb15AxcebSS6Mo5YaaepxtPfZeGNm4vYAYE34jIVcm2XljioEH07qWgaWPJOS7U0IWSBWaJSrxd8scS0VnycujU8LQdbB3r4Ab1P3a9_P_vvozXr447snSHkLOvUjMSGXxMzOCjvpMrUdU8ysMs--9kLFPcsFpu2Bc3dI2zGUQIfQiwIJbP_bW-QNA0nI2jeFWKVaH8qY46A0KUdJpJINqBtVjYaagRXHXpTOz0jHX8G8ozvgKTf2")`,
              }}
            ></div>
          </div>
          <div className="mt-6 text-center">
            <span className="font-headline-sm text-headline-sm block">
              Nexus Android
            </span>
            <span className="text-on-surface-variant font-label-md">
              Real-time Logistics Tracker
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
