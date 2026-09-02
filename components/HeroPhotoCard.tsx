import Image from "next/image";

export default function HeroPhotoCard({ image, caption }: { image: string; caption: string }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-cream-deep bg-white">
      <div className="relative min-h-[220px] w-full flex-1">
        <Image src={image} alt="" fill className="object-cover" />
      </div>
      <div
        className="relative z-10 -mt-[70px] mx-5 rounded-[24px] bg-white px-5 pb-10 pt-[60px] text-center"
        style={{ boxShadow: "0px 26px 30px -21px rgba(0,0,0,0.29) inset" }}
      >
        <Image
          src="/images/services-badge-logo.png"
          alt=""
          width={80}
          height={80}
          className="absolute left-1/2 top-[-40px] h-20 w-20 -translate-x-1/2 rounded-full object-cover shadow-md"
        />
        <p className="font-body text-xl font-medium leading-7 text-ink">{caption}</p>
      </div>
    </div>
  );
}
