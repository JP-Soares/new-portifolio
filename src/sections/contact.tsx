import Title from "../components/title";

export default function Contact(){
    return(
        <section className="bg-woodsmoke-900">
            <div className="">
                <Title text="Contact" textColor="text-woodsmoke-100" lineColor="bg-woodsmoke-100"></Title>
            </div>
            <div className="flex justify-around align-center gap-40">
                <div>
                    <p>linkedin</p>
                </div>
                <div>
                    <p>GitHub</p>
                </div>
            </div>
        </section>
    );
}