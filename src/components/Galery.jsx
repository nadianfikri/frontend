import { GetImage } from "./GetImage";
export function Galery() {
    return (
        <div>
            <h1>Ilmuan Terkenal</h1>
            <section className="profile">
                <h2>Maria skydowsky-curie</h2>
                <img
                className="avatar"
                src={GetImage("maria")}
                alt="maria skydowsky-curie"
                width={70}
                hight={70}
                />
                <ul>
                    <li>
                    <b>Profesi: </b>
                    Fisikawan dan ahli kimia
                    </li>
                    <li>
                        <b>Penghargan: </b>
                        (Hadiah nobel fisika, Hadiah nobel kimia)
                    </li>
                    <li>
                        <b>Penemuan: </b>
                        Polonium (unsur kimia)
                    </li>
                </ul>
                </section>
                <section className="profile">
                <h2>Isaac Newton</h2>
                <img
                className="avatar"
                src={GetImage("isaac")}
                alt="Isaac Newton"
                width={70}
                hight={70}
                />
                <ul>
                    <li>
                    <b>Profesi: </b>
                    Fisikawan dan ahli kimia
                    </li>
                    <li>
                        <b>Penghargan: </b>
                        (Hadiah nobel fisika, Hadiah nobel kimia)
                    </li>
                    <li>
                        <b>Penemuan: </b>
                        Hukum newton satu
                    </li>
                </ul>
            </section>
        </div>
    );
}