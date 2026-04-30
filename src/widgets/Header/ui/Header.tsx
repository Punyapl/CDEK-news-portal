import CDEKLogo from '@/shared/assets/images/CDEKLogo.png'

export const Header = () => {
    return (
        <div className="fixed px-6 py-2 bg-white flex gap-2 items-center justify-center rounded-full mt-4 z-50">
            <img src={CDEKLogo} alt="CDEK Logo" className='w-21 h-6'/>
            <p className='text-logo font-bold text-base leading-none'>Новости</p>
        </div>
    );
};
