export const FREE_STATE= [
    {
        id: 0,
        title: "Abantu Batho Congress (ABC)",
        icon: "./Assets/Images/Party Logo/ABC.jfif",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 1,    
        title: <a href="https://www.actionsa.org.za//">Action SA()</a>,
        icon: "",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 2,
        title: <a href="https://acdp.org.za/">African Christian Democratic Party (ACDP)</a>,
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
        title: <a href="https://acmovement.org.za/">African Content Movement (ACM)</a>,
        icon: "./Assets/Images/Party Logo/ACM.png",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 5,
        title: "African Movement Congress",
        icon: "",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 6,
        title: <a href="https://www.anc1912.org.za/">African National Congress (ANC)</a>,
        icon: "",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 7,
        title: "African Peoples Convention",
        icon: "",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 8,
        title: <a href="http://www.atm-sa.co.za/">African Transfomation Movement (ATM)</a>,
        icon: "",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 9,
        title: "All Citizens Party",
        icon: "./Assets/Images/Party Logo/ACP.jpg",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 10,
        title: <a href="https://www.arisesa.org/">Arise South Africa</a>,
        icon: "",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 11,
        title: <a href="https://www.bosa.co.za/">Build One South Africa (BOSA)</a>,
        icon: "",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 12,
        title: <a href="https://www.copesa.org.za/">Congress of the People (COPE)</a>,
        icon: "",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 13,
        title: <a href="https://www.da.org.za/">Democratic Alliance (DA)</a>,
        icon: "",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 14,
        title: <a href="https://effonline.org/">Economic Freedom Fighters (EFF)</a>,
        icon: "",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 15,
        title: <a href="https://forum4sd.org.za/">Forum 4 Service Delivery (F4SD)</a>,
        icon: "./Assets/Images/Party Logo/F4SD.jpg",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 16,
        title: <a href="https://forgood.org.za/">GOOD</a>,
        icon: "",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 17,
        title: <a href="https://www.ifp.org.za/">Inkatha Freedom Party (IFP)</a>,
        icon: "",
        date: "15/03/2024",
        responsibility: [""],
    }, 
    {
        id: 18,
        title: "National Freedom Party (NFP)",
        icon: "./Assets/Images/Party Logo/NFP.jpg",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 19,
        title: <a href="https://pac.org.za/">Pan Africanist Congress of Azania (PAC)</a>,
        icon: "./Assets/Images/Party Logo/PAC.png",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 20,
        title: <a href="https://mypa.org.za/">Patriotic Alliance (PA)</a>,
        icon: "./Assets/Images/Party Logo/PA.png",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 21,
        title: <a href="https://www.risemzansi.org/">Rise Mzansi (RS)</a>,
        icon: "./Assets/Images/Party Logo/Rise-Mzansi.png",
        date: "08/02/2024",
        responsibility: [""],
    },
    {
        id: 22,
        title: "Ramotswabodi Sesing (Indepedent)",
        icon: "./Assets/Images/Party Logo/NFP.jpg",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 23,
        title: <a href="https://mkparty.org.za/">uMkhonto weSizwe (MK)</a>,
        icon: "./Assets/Images/Party Logo/MK.png",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 24,
        title: <a href="https://www.uat2023.org/">United Africans Transformation (UAT) </a>,
        icon: "",
        date: "15/03/2024",
        responsibility: [""],
    },
    {
        id: 25,
        title: <a href="https://udm.org.za/">United Democratic Movement (UDM)</a>,
        icon: "./Assets/Images/Party Logo/UDM.png",
        date: "02/03/2024",
        responsibility: [""],
    },
    {
        id: 26,
        title: <a href="https://www.vfplus.org.za/">Freedom Front Plus (FF+)</a>,
        icon: "./Assets/Images/Party Logo/FF+.png",
        date: "02/03/2024",
        responsibility: [""],
    },
]

export const freeState = FREE_STATE.map(data => 
    <li key={data.id}>
      <p>{data.title}</p>
    </li>
  )