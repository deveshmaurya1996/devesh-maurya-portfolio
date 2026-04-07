import Container from "@/components/layout/container";
import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";

export default function NotFound() {
  return (
    <Container className="!pt-24 md:!pt-28">
      <div className="flex max-w-xl flex-col gap-4">
        <Typography variant="h1">Page not found</Typography>
        <Typography variant="body1" className="text-gray-600">
          The page you are looking for does not exist or has moved.
        </Typography>
        <Link href="/" withUnderline className="w-fit">
          Back to home
        </Link>
      </div>
    </Container>
  );
}
