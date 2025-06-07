import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      src="/doecerto.svg"
      alt="Logo DoeCerto"
      width={32}
      height={32}
      priority
    />
  );
}