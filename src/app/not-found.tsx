import Link from 'next/link';
import { Button } from '@/components/ui/button';
export default function NotFound(){return <section className="shell py-24 text-center"><p className="eyebrow justify-center">404 · A little detour</p><h1>Let’s find our<br /><em>way home.</em></h1><p className="text-muted-foreground my-7">This page may have moved, but you’re always welcome here.</p><Button asChild><Link href="/">Back to home</Link></Button></section>}
