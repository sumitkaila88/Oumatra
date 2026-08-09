import { Companies } from "@/components/home/companies";
import { Closing } from "@/components/home/closing";
import { Hero } from "@/components/home/hero";
import { Manifesto } from "@/components/home/manifesto";
import { Origin } from "@/components/home/origin";
import { Purpose } from "@/components/home/purpose";
import { Values } from "@/components/home/values";

export default function Home(){return <main id="main-content" tabIndex={-1}><Hero/><Origin/><Purpose/><Companies/><Values/><Manifesto/><Closing/></main>}
