import { Mail } from "lucide-react";

export const Contact: React.FC = () => {
    return (
        <section className="w-full min-h-[50vh] bg-secondary-light px-6 py-20 text-accent md:px-12 lg:py-24" id="contact">
            <div className="mx-auto max-w-4xl text-center">
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-foreground">
                    Get Involved
                </p>

                <h2 className="text-4xl font-bold tracking-tight md:text-5xl text-accent">
                    Contact
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-accent-foreground">
                    We'd love to hear from you whether you are a student interested in robotics, a potential sponsor or mentor,
                    or just want to learn more about what we do.
                </p>

                <div className="mt-8">
                    <a
                        href="mailto:graysonfrc@gmail.com"
                        className="inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-accent transition hover:bg-blue-50"
                    >
                        Get in Touch
                    </a>

                <a
                    href="mailto:graysonfrc@gmail.com"
                    className="text-accent hover:text-accent-foreground inline-flex items-center gap-2 text-sm transition-colors m-3"
                    aria-label="Email Grayson Robotics at graysonfrc@gmail.com"
                >
                    <Mail size={16} aria-hidden="true" />
                    graysonfrc@gmail.com
                </a>
                
                </div>

            </div>
        </section>
    );
}
