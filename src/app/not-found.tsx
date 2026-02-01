import { PagePlaceholder } from '@/shared/ui/PagePlaceholder';

export default function NotFound() {
  return (
    <div>
      <PagePlaceholder
        title="404 - Page Not Found"
        description="We couldn't find any page with this URL."
      />
    </div>
  );
}
