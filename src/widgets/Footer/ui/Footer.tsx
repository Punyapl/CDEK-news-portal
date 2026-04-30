import { IconBrandGithub, IconBrandTelegram, IconFileCode, } from "@tabler/icons-react";

export const Footer = () => {
    return (
        <div className="w-full p-6 bg-button-text flex flex-col gap-2 items-center">
            <p className="text-text-secondary text-sm leading-none">Made by Mikheev Alexander</p>
            <div className="flex gap-2">
                <a type="button" className="cursor-pointer" href="https://t.me/punyapl" target="_blank" rel="noopener noreferrer">
                    <IconBrandTelegram color="var(--color-text-secondary)" size={21} />
                </a>
                <a type="button" className="cursor-pointer" href="https://github.com/punyapl" target="_blank" rel="noopener noreferrer">
                    <IconBrandGithub color="var(--color-text-secondary)" size={21} />
                </a>
                <a type="button" className="cursor-pointer" href="https://disk.yandex.ru/i/kT-Skznn3gG5lQ" target="_blank" rel="noopener noreferrer">
                    <IconFileCode color="var(--color-text-secondary)" size={21} />
                </a>
            </div>
        </div>
    );
};
