import FeatureCard from "./FeatureCard";
import { TbTruckDelivery, TbDiscount, TbAlarm } from "react-icons/tb";
import { RiRefund2Fill } from "react-icons/ri";
import { GiNoodles } from "react-icons/gi";
import { AiOutlineSafety } from "react-icons/ai";

const data = [
    {
        icon: <TbAlarm className="text-4xl" />,
        title: "Pesan Mudah & Cepat",
        desc: "Tersedia pemesanan online via website dan aplikasi.",
    },
    {
        icon: <RiRefund2Fill className="text-4xl" />,
        title: "Pembayaran Mudah",
        desc: "Pembayaran mudah dan praktis di berbagai platform",
    },
    {
        icon: <GiNoodles className="text-4xl" />,
        title: "Cita Rasa Autentik",
        desc: "Rasa gurih dan nikmat yang menggugah selera.",
    },
    {
        icon: <AiOutlineSafety className="text-4xl" />,
        title: "Higienis dan Halal",
        desc: "Sertifikasi halal bagi kenyamanan konsumen muslim.",
    },
];

const Feature = () => {
    return (
        <div className="container grid gap-1 sm:grid-cols-2 lg:grid-cols-4 mt-8">
            {data.map((item) => (
                <FeatureCard
                    key={item.title}
                    icon={item.icon}
                    title={item.title}
                    desc={item.desc}
                />
            ))}
        </div>
    );
};

export default Feature;