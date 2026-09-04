import { permanentRedirect } from 'next/navigation';

export default function LegacyBlogIndex() {
    permanentRedirect('/blog');
}
