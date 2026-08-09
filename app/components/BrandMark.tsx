import Image from "next/image";

export default function BrandMark() {
  return (
    <span className="brandMark brandMarkOfficial">
      <Image
        src="/brand/logo_D_hochkant.png"
        alt="Rechte der Natur – Die Volksbegehren"
        width={541}
        height={600}
      />
    </span>
  );
}
