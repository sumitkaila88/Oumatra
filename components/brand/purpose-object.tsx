import Image from "next/image";

export function PurposeObject() {
  return (
    <div className="purpose-object" aria-hidden="true">
      <span className="purpose-object__ring purpose-object__ring--outer" />
      <Image src="/brand/logo/oumatra-symbol-light.svg" alt="" width={340} height={340} />
    </div>
  );
}
