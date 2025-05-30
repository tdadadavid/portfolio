import { cn } from '@/lib/utils';


const HR = ({ className = ''}) => {
    return (
        <hr
            className={cn('dark:!border-[#212d40] border-[#e1e2e5]', className)}
        />
    );
};

export default HR;

