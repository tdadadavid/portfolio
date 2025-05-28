import { cn } from '@/lib/utils';


const HR = ({ className = ''}) => {
    return (
        <hr
            className={cn('dark:!border-b-[#212d40] bg-[#e1e2e5]', className)}
        />
    );
};

export default HR;

