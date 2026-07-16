import { TESTIMONIALS } from "@/lib/data";
import Tag from "@/components/data-display/tag";
import TestimonialDetails from "@/components/data-display/testimonial-details";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";

const TestimonialsSection = () => {
  return (
    <Container id="testimonials" className="!py-14 md:!py-16">
      <div className="mb-8 flex flex-col items-center gap-3">
        <Tag label="Testimonials" />
        <Typography variant="subtitle" className="max-w-xl text-center">
          Feedback from people I have worked with
        </Typography>
      </div>

      <div className="grid w-full gap-5 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((testimonial, index) => (
          <TestimonialDetails key={index} {...testimonial} />
        ))}
      </div>
    </Container>
  );
};

export default TestimonialsSection;
