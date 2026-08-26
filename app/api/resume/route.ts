import { NextResponse } from 'next/server';

import { getResume } from '@/lib/resume';

export const dynamic = 'force-static';

export const GET = () => NextResponse.json(getResume());
