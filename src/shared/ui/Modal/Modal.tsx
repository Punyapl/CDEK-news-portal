import { ReactNode, useEffect, useRef, } from 'react'
import { IconX, } from '@tabler/icons-react';

export type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
    closeOnOutsideClick?: boolean;
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Modal = (props: ModalProps) => {
    const {
        isOpen,
        onClose,
        title,
        children,
        closeOnOutsideClick = true,
        size = 'md',
    } = props

    const dialogRef = useRef<HTMLDialogElement>(null);

    const sizeClasses = {
        sm: 'w-sm',
        md: 'w-md',
        lg: 'w-lg',
        xl: 'w-xl',
    };

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isOpen) {
            dialog.showModal();
            document.body.classList.add('overflow-hidden');
        } else {
            dialog.close();
            document.body.classList.remove('overflow-hidden');
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isOpen,]);

    const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
        if (!closeOnOutsideClick) return;

        if (e.target === dialogRef.current) {
            onClose();
        }
    };

    return (
        <dialog
            ref={dialogRef}
            onClick={handleBackdropClick}
            className="
                fixed inset-0 z-50 bg-transparent w-max h-max 
                justify-self-center self-center

                backdrop:bg-black/50 backdrop:backdrop-blur-sm
                backdrop:transition-all backdrop:duration-500

                transition-all duration-500 allow-discrete
                opacity-0 scale-95

                open:flex open:opacity-100 open:scale-100

                starting:open:opacity-0 starting:open:scale-95
                starting:backdrop:opacity-0
            "
            onClose={onClose}
        >
            <div
                className={
                    `relative bg-white p-5 rounded-[20px] shadow-xl w-full 
                    ${sizeClasses[size]} max-h-[90vh] overflow-hidden flex 
                    flex-col gap-3`
                }
            >
                <div className={`flex ${title ? 'justify-between' : 'justify-end'} items-center`}>
                    <h4 className="font-h4 text-text-primary">{title}</h4>
                    <button type="button" onClick={onClose} className='cursor-pointer' aria-label="Закрыть модальное окно">
                        <IconX color='var(--color-text-secondary)' size={30} />
                    </button>
                </div>
                <div className="pr-2 overflow-y-auto scrollbar-primary max-h-[calc(90vh-7rem)]">
                    {children}
                </div>
            </div>
        </dialog>
    )
}