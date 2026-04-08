import { useEffect } from "react";
import { motion, AnimatePresence, color } from "framer-motion";
import {
  Crown,
  Ticket,
  Users,
  Star,
  Plane,
  X,
  LucideIcon,
} from "lucide-react";

/* ================= TYPES ================= */

type ServiceCardProps = {
  title: string;
  desc: string;
  badge?: string;
  icon: LucideIcon;
  subject: string;
  body: string;
};

type ServicesModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

/* ================= HELPERS ================= */

const email = "relysmild@gmail.com";

const createMailto = (subject: string, body: string): string => {
  return `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
};

/* ================= CARD ================= */

const ServiceCard = ({
  title,
  desc,
  badge,
  icon: Icon,
  subject,
  body,
}: ServiceCardProps) => {
  return (
    <a
      href={createMailto(subject, body)}
      className="group relative rounded-2xl overflow-hidden shadow-lg transition-transform transform hover:scale-[1.03]" style={{textDecoration: 'none'}}
    >
      {/* Card Background */}
      <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 rounded-2xl hover:shadow-2xl hover:from-red-600 hover:to-yellow-500 transition-all duration-300 relative" style={{background: '#fff', padding: '.3rem'}}>
        
        {/* Badge */}
        {badge && (
          <span className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full bg-yellow-500 text-gray shadow-md" style={{background: '#fff', padding: '.1rem .5rem', fontSize: '12px', color: 'gray'}}>
            {badge}
          </span>
        )}

        {/* Icon */}
        <div className="mb-4">
          <Icon className="w-6 h-6 text-500 group-hover:text-yellow-400 transition-colors duration-300" style={{color: '#000',}} />
        </div>

        {/* Title */}
        <h3 style={{color: 'gold',}} className="text-lg font-semibold mb-2">{title}</h3>

        {/* Divider */}
        <div className="w-10 h-[2px] bg-red-500 mb-3 group-hover:bg-yellow-400 transition-colors"></div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed" style={{marginTop: '2rem', color: '#000', padding: '2rem'}}>{desc}</p>

        <div style={{background: '#9f1239', margin: '.5rem auto', width: "90%", textAlign: 'center', padding: '.3rem 0rem', borderRadius:' .5rem', color: '#fff'}}>Apply now</div>

        {/* Hover Glow Overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-tr from-red-500/20 to-yellow-400/20 rounded-2xl transition-opacity"></div>
      </div>
    </a>
  );
};

/* ================= MAIN MODAL ================= */

export default function ServicesModal({
  isOpen,
  onClose,
}: ServicesModalProps) {
  /* ESC CLOSE */
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-gradient-to-br from-black via-zinc-900 to-black/95 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* MODAL BOX */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
className="w-full max-w-6xl max-h-[90vh] overflow-y-auto 
bg-gradient-to-b from-zinc-950 to-black 
text-white rounded-3xl p-8 
shadow-[0_20px_60px_rgba(0,0,0,0.8)] 
border border-zinc-800" style={{backgroundImage: "url('/1.jpg')", padding: '2rem 2rem 7rem 2rem', position: "absolute", top: '10rem', scrollbarWidth: 'none'}}         >
            {/* HEADER */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Services</h2>

              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-zinc-800 transition"
              >
                <X />
              </button>
            </div>

            <div className="space-y-10">
              {/* ================= MEET & GREET ================= */}
              <section>
                <h3 className="text-xl font-semibold mb-6 text-500 tracking-wide flex items-center gap-2" style={{color: '#e11d48', background: '#fff', width: 'fit-content', padding: '.1rem 1rem', borderRadius: '.2rem', marginBottom: '.5rem'}}>
                  Meet & Greet
                </h3>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  <ServiceCard
                    title="REGULAR"
                    desc="General meet & greet with photo opportunity, standard seating."
                    icon={Star}
                    subject="Regular Meet & Greet Request"
                    body="Hello, I am interested in the Regular Meet & Greet package. I would like to inquire about availability and pricing for standard access."
                  />
                  <ServiceCard
                    title="VIP"
                    desc="Priority access with exclusive interaction and premium seating."
                    icon={Users}
                    subject="VIP Meet & Greet Request"
                    body="Hello, I am interested in the VIP Meet & Greet package."
                  />

                  <ServiceCard
                    title="VVIP"
                    desc="Enhanced access with backstage moments and deeper engagement."
                    badge="Popular"
                    icon={Crown}
                    subject="VVIP Meet & Greet Request"
                    body="Hello, I am interested in the VVIP Meet & Greet package."
                  />

                  <ServiceCard
                    title="Platinum"
                    desc="Ultimate luxury experience with maximum exclusivity."
                    badge="Elite"
                    icon={Star}
                    subject="Platinum Meet & Greet Request"
                    body="Hello, I am interested in the Platinum Meet & Greet package."
                  />
                </div>
              </section>

              {/* ================= MEMBERSHIP ================= */}
              <section>
                <h3 className="text-xl font-semibold mb-4 text-500" style={{color: '#e11d48', background: '#fff', width: 'fit-content', padding: '.1rem 1rem', borderRadius: '.2rem', marginBottom: '.5rem'}}>
                  Membership
                </h3>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  <ServiceCard
                    title="Regular"
                    desc="Basic access to updates and community perks."
                    icon={Users}
                    subject="Regular Membership Request"
                    body="Hello, I am interested in the Regular Membership."
                  />

                  <ServiceCard
                    title="VIP"
                    desc="Priority access to events and exclusive content."
                    icon={Crown}
                    subject="VIP Membership Request"
                    body="Hello, I am interested in the VIP Membership."
                  />

                  <ServiceCard
                    title="VVIP"
                    desc="High-level privileges and priority booking."
                    badge="Premium"
                    icon={Star}
                    subject="VVIP Membership Request"
                    body="Hello, I am interested in the VVIP Membership."
                  />

                  <ServiceCard
                    title="Platinum"
                    desc="Top-tier membership with full premium benefits."
                    badge="Elite"
                    icon={Star}
                    subject="Platinum Membership Request"
                    body="Hello, I am interested in the Platinum Membership."
                  />
                </div>
              </section>

              {/* ================= TOUR ================= */}
              <section>
                <h3 className="text-xl font-semibold mb-4 text-500" style={{color: '#e11d48', background: '#fff', width: 'fit-content', padding: '.1rem 1rem', borderRadius: '.2rem', marginBottom: '.5rem'}}>
                  Tour Tickets
                </h3>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <ServiceCard
                    title="General Access"
                    desc="Standard entry with a great concert experience."
                    icon={Ticket}
                    subject="General Ticket Request"
                    body="Hello, I want to purchase General Access tickets."
                  />

                  <ServiceCard
                    title="VIP Access"
                    desc="Better seating and priority entry perks."
                    icon={Crown}
                    subject="VIP Ticket Request"
                    body="Hello, I want VIP Access tickets."
                  />

                  <ServiceCard
                    title="Backstage"
                    desc="Full premium experience with backstage access."
                    badge="Exclusive"
                    icon={Star}
                    subject="Backstage Ticket Request"
                    body="Hello, I want Backstage access tickets."
                  />
                </div>
              </section>

              {/* ================= AUTOGRAPH ================= */}
              <section>
                <h3 className="text-xl font-semibold mb-4 text-500" style={{color: '#e11d48', background: '#fff', width: 'fit-content', padding: '.1rem 1rem', borderRadius: '.2rem', marginBottom: '.5rem'}}>
                  Autograph
                </h3>

                <div className="grid md:grid-cols-2">
                  <ServiceCard
                    title="Signed Experience"
                    desc="Exclusive signed merchandise or personalized autograph opportunities."
                    icon={Star}
                    subject="Autograph Request"
                    body="Hello, I am interested in an autograph experience."
                  />
                </div>
              </section>

              {/* ================= VACATION ================= */}
              <section>
                <h3 className="text-xl font-semibold mb-4 text-500" style={{color: '#e11d48', background: '#fff', width: 'fit-content', padding: '.1rem 1rem', borderRadius: '.2rem', marginBottom: '.5rem'}}>
                  Vacation
                </h3>

                <div className="grid md:grid-cols-2">
                  <ServiceCard
                    title="Fan Experience Trip"
                    desc="Luxury travel packages and exclusive fan experiences. Contact management for booking."
                    icon={Plane}
                    subject="Vacation Package Request"
                    body="Hello, I am interested in vacation/fan experience packages."
                  />
                </div>
              </section>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}