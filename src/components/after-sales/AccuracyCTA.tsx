import { Phone, Mail, CalendarCheck, ArrowRight } from "lucide-react";

export default function AccuracyCTA() {
  return (
    <section className="px-5 py-12 sm:px-8 sm:py-16 md:px-12 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-slate-200 bg-[#EAF4F8] shadow-sm sm:rounded-3xl">
        <div className="">
          {/* ================= CONTENT ================= */}
          <div className="flex items-center px-6 py-10 sm:px-10 sm:py-12 lg:px-14 xl:px-16">
            <div className="w-full">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#F59A23]" />

                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#00AFA9]">
                  SENLOGIC AFTER-SALES SUPPORT
                </span>
              </div>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#173A63] sm:text-4xl">
                Keep Your Operations Running at Peak Accuracy
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Do not wait for a breakdown or a failed audit to evaluate your
                weighing equipment. Partner with a service team that understands
                the critical role precision plays in your business.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Contact our After-Sales Support Desk today to schedule a
                calibration, request an AMC quote, or speak with a technical
                specialist.
              </p>

              {/* ================= CONTACT ================= */}
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <a
                  href="tel:+918939821705"
                  className="group flex items-center gap-3 rounded-xl bg-[#00AFA9] px-4 py-4 text-white transition-colors duration-300 hover:bg-[#173A63]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                    <Phone size={19} />
                  </div>

                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-wider text-white/70">
                      Call Us
                    </p>

                    <p className="mt-1 text-sm font-bold">+91 8939821705</p>
                  </div>

                  <ArrowRight
                    size={17}
                    className="ml-auto transition-transform group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="mailto:service@senlogicgroup.com"
                  className="group flex items-center gap-3 rounded-xl bg-[#173A63] px-4 py-4 text-white transition-colors duration-300 hover:bg-[#00AFA9]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                    <Mail size={19} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-medium uppercase tracking-wider text-white/70">
                      Email Us
                    </p>

                    <p className="mt-1 truncate text-sm font-bold">
                      service@senlogicgroup.com
                    </p>
                  </div>

                  <ArrowRight
                    size={17}
                    className="ml-auto shrink-0 transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>

              {/* Bottom */}
              <div className="mt-7 flex items-center gap-3 border-t border-slate-200 pt-5">
                <CalendarCheck size={20} className="shrink-0 text-[#00AFA9]" />

                <p className="text-xs leading-5 text-slate-500 sm:text-sm">
                  Schedule a calibration, request an AMC quote, or speak with a
                  technical specialist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
