export const NORTHERN_CAPE= [
    {
        id: 0,
        title: <a href="https://www.actionsa.org.za//">Action SA()</a>,
        icon: "./Assets/Images/Party Logo/ASA.png",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 1,
        title: <a href="https://ara-sa.org.za/">Africa Restoration Alliance (ARA)</a>,
        icon: "./Assets/Images/Party Logo/AAR.jpg",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 2,
        title: "African Christian Democratic Party",
        icon: "",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 3,
        title: "African Congress for Transformation",
        icon: "",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 4,
        title: "African National Congress",
        icon: "",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 8,
        title: "African Transformation Movement",
        icon: "",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 10,
        title: "All Citizens Party",
        icon: "./Assets/Images/Party Logo/ACP.jpg",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 11,
        title: <a href="https://www.arisesa.org/">Arise South Africa</a>,
        icon: "",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 12,
        title: "Build One South Africa",
        icon: "",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 13,
        title: "Congress of The People",
        icon: "",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 14,
        title: "Democratic Alliance",
        icon: "",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 15,
        title: "Economic Freedom Fighters",
        icon: "",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 18,
        title: "GOOD",
        icon: "",
        date: "15/03/2024",
        responsibility: [""],
    },
    {    
        id: 19,
        title: <a href="https://www.hope4sa.org.za/">#HOPE4SA</a>,
        icon: "./Assets/Images/Party Logo/H4SA.png",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 20,
        title: "Inkatha Freedom Party",
        icon: "",
        date: "15/03/2024",
        responsibility: [""],
    }, 
    {
        id: 21,
        title: <a href="https://nccm.org.za/">Northern Cape Communities Movement (NCCM)</a>,
        icon: "./Assets/Images/Party Logo/NCCM.png",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 22,
        title: <a href="https://pac.org.za/">Pan Africanist Congress of Azania (PAC)</a>,
        icon: "./Assets/Images/Party Logo/PAC.png",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 23,
        title: <a href="https://mypa.org.za/">Patriotic Alliance (PA)</a>,
        icon: "./Assets/Images/Party Logo/PA.png",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 24,
        title: <a href="https://pmc.org.za/">Peoples Movement For Change (PMC)</a>,
        icon: "./Assets/Images/Party Logo/PMC.jfif",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 25,
        title: <a href="https://www.risemzansi.org/">Rise Mzansi (RS)</a>,
        icon: "./Assets/Images/Party Logo/Rise-Mzansi.png",
        date: "08/02/2024",
        responsibility: [""],
    },
    {
        id: 26,
        title: <a href="https://sarko.org.za/about/">South African Royal Kingdoms Organization (SARKO)</a>,
        icon: "./Assets/Images/Party Logo/SARKO.jpg",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 27,
        title: <a href="https://sayparty.org/">South African Youth Power Party</a>,
        icon: "",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 27,
        title: <a href="https://mkparty.org.za/">uMkhonto weSizwe (MK)</a>,
        icon: "./Assets/Images/Party Logo/MK.png",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 28,
        title: <a href="https://www.vfplus.org.za/">Freedom Front Plus (FF+)</a>,
        icon: "./Assets/Images/Party Logo/FF+.png",
        date: "02/03/2024",
        responsibility: [""],
    },
]

export const northernCape = NORTHERN_CAPE.map(data => 
    <li key={data.id}>
      <p>{data.title}</p>
    </li>
  )