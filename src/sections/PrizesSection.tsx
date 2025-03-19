import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Sparkles, Lightbulb, Brush, Code2, Heart } from 'lucide-react';
import gsap from 'gsap';

const PrizesSection: React.FC = () => {
  const dollarsRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };
  
  const prizeCategories = [
    {
      icon: <Star className="w-10 h-10 text-neon-cyan" />,
      title: "Grand Prize",
      amount: "$250,000",
      description: "For the most impressive overall web app that demonstrates exceptional execution, originality, and impact."
    },
    {
      icon: <Sparkles className="w-10 h-10 text-neon-cyan" />,
      title: "Technical Excellence",
      amount: "$100,000",
      description: "For the app that demonstrates the most impressive technical achievement and engineering quality."
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-neon-cyan" />,
      title: "Innovation Prize",
      amount: "$100,000",
      description: "For the most innovative solution that uses technology in a novel way to address a meaningful problem."
    },
    {
      icon: <Brush className="w-10 h-10 text-neon-cyan" />,
      title: "Best UI/UX",
      amount: "$100,000",
      description: "For the app with the most beautiful, intuitive, and well-designed user interface and experience."
    },
    {
      icon: <Code2 className="w-10 h-10 text-neon-cyan" />,
      title: "Best Use of AI",
      amount: "$100,000",
      description: "For the most effective integration of artificial intelligence to enhance functionality or user experience."
    },
    {
      icon: <Heart className="w-10 h-10 text-neon-cyan" />,
      title: "Social Impact",
      amount: "$100,000",
      description: "For the app with the most potential to create positive social change and improve people's lives."
    },
  ];
  
  const sponsorPrizes = [
    {
      sponsor: "Supabase",
      amount: "$50,000",
      logoUrl: "https://supabase.com/_next/image?url=https://frontend-assets.supabase.com/www/29a6830c69d7/_next/static/media/supabase-logo-wordmark--dark.b36ebb5f.png&w=256&q=75&dpl=dpl_Fng3G1gK6SEDNHcQPRba1mbyoriD",
      description: "For the best use of Supabase's platform"
    },
    {
      sponsor: "Netlify",
      amount: "$50,000",
      logoUrl: "https://www.netlify.com/v3/img/components/netlify-color-accent.svg",
      description: "For the best app deployed on Netlify"
    },
    {
      sponsor: "Cloudflare",
      amount: "$50,000",
      logoUrl: "data:image/svg+xml,%3csvg%20width='213'%20height='33'%20viewBox='0%200%20213%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M46.7823%2031.6279L47.1295%2030.4071C47.551%2028.962%2047.3939%2027.6165%2046.6914%2026.6365C46.0467%2025.7312%2044.9722%2025.1997%2043.6662%2025.1333L18.9526%2024.8177C18.7873%2024.8094%2018.6468%2024.7346%2018.5641%2024.61C18.4815%2024.4854%2018.4567%2024.3193%2018.5146%2024.1615C18.5972%2023.9207%2018.8369%2023.7297%2019.0849%2023.7214L44.0216%2023.4058C46.9807%2023.2729%2050.1794%2020.8561%2051.3035%2017.916L52.7251%2014.1787C52.7665%2014.079%2052.783%2013.9711%2052.783%2013.8631C52.783%2013.805%2052.7747%2013.7468%2052.7665%2013.6887C51.163%206.38841%2044.6746%200.931885%2036.9299%200.931885C29.7886%200.931885%2023.7218%205.56619%2021.548%2012.0027C20.1428%2010.948%2018.3492%2010.3832%2016.4151%2010.5742C12.985%2010.9147%2010.2326%2013.6887%209.89371%2017.1353C9.80279%2018.0323%209.87718%2018.8877%2010.0838%2019.7016C4.48813%2019.8678%200%2024.4771%200%2030.133C0%2030.6479%200.0413271%2031.1462%200.107451%2031.6445C0.140512%2031.8854%200.347148%2032.0598%200.586845%2032.0598L46.2037%2032.0681C46.212%2032.0681%2046.212%2032.0681%2046.2203%2032.0681C46.4765%2032.0598%2046.7079%2031.8854%2046.7823%2031.6279Z'%20fill='white'/%3e%3cpath%20d='M55.0145%2014.4528C54.7831%2014.4528%2054.5599%2014.4611%2054.3285%2014.4694C54.2872%2014.4694%2054.2541%2014.4777%2054.221%2014.4943C54.1053%2014.5358%2054.0061%2014.6355%2053.9731%2014.7601L52.9978%2018.132C52.5762%2019.5771%2052.7333%2020.9225%2053.4358%2021.9025C54.0805%2022.8078%2055.155%2023.3393%2056.461%2023.4058L61.7261%2023.7214C61.8831%2023.7297%2062.0154%2023.8044%2062.098%2023.929C62.1889%2024.0536%2062.2055%2024.2197%2062.1559%2024.3775C62.0732%2024.6183%2061.8335%2024.8093%2061.5856%2024.8177L56.1138%2025.1333C53.1465%2025.2744%2049.9395%2027.6829%2048.8154%2030.623L48.4187%2031.6611C48.3443%2031.8522%2048.4848%2032.0515%2048.6749%2032.0598C48.6832%2032.0598%2048.6832%2032.0598%2048.6915%2032.0598H67.5284C67.7516%2032.0598%2067.9499%2031.9103%2068.0161%2031.6944C68.3467%2030.5233%2068.5203%2029.2942%2068.5203%2028.0152C68.5203%2020.5322%2062.47%2014.4528%2055.0145%2014.4528Z'%20fill='white'/%3e%3cpath%20d='M89.292%2020.5405H92.4081V29.1031H97.8632V31.8439H89.292V20.5405Z'%20fill='white'/%3e%3cpath%20d='M101.095%2026.2212V26.188C101.095%2022.9407%20103.698%2020.3079%20107.17%2020.3079C110.641%2020.3079%20113.212%2022.9075%20113.212%2026.1548V26.188C113.212%2029.4353%20110.608%2032.0681%20107.137%2032.0681C103.665%2032.0681%20101.095%2029.4686%20101.095%2026.2212ZM110.03%2026.2212V26.188C110.03%2024.5602%20108.856%2023.1317%20107.137%2023.1317C105.434%2023.1317%20104.293%2024.5187%20104.293%2026.1548V26.188C104.293%2027.8158%20105.467%2029.2443%20107.17%2029.2443C108.889%2029.2443%20110.03%2027.8574%20110.03%2026.2212Z'%20fill='white'/%3e%3cpath%20d='M117.03%2026.8856V20.5405H120.196V26.8275C120.196%2028.4553%20121.014%2029.236%20122.271%2029.236C123.527%2029.236%20124.345%2028.4969%20124.345%2026.9106V20.5488H127.511V26.8192C127.511%2030.4735%20125.436%2032.0681%20122.237%2032.0681C119.039%2032.0515%20117.03%2030.4237%20117.03%2026.8856Z'%20fill='white'/%3e%3cpath%20d='M132.288%2020.5405H136.627C140.645%2020.5405%20142.975%2022.8659%20142.975%2026.1299V26.1631C142.975%2029.427%20140.611%2031.8522%20136.561%2031.8522H132.288V20.5405ZM136.677%2029.0699C138.545%2029.0699%20139.777%2028.0401%20139.777%2026.2129V26.1797C139.777%2024.3692%20138.537%2023.3227%20136.677%2023.3227H135.404V29.0699H136.677Z'%20fill='white'/%3e%3cpath%20d='M147.505%2020.5405H156.514V23.2812H150.629V25.208H155.952V27.8075H150.629V31.8439H147.505V20.5405Z'%20fill='white'/%3e%3cpath%20d='M160.854%2020.5405H163.97V29.1031H169.417V31.8439H160.854V20.5405Z'%20fill='white'/%3e%3cpath%20d='M177.575%2020.4574H180.583L185.377%2031.8439H182.03L181.212%2029.8257H176.872L176.07%2031.8439H172.789L177.575%2020.4574ZM180.302%2027.384L179.046%2024.1699L177.773%2027.384H180.302Z'%20fill='white'/%3e%3cpath%20d='M189.386%2020.5405H194.709C196.428%2020.5405%20197.618%2020.9973%20198.37%2021.7696C199.032%2022.4174%20199.37%2023.2895%20199.37%2024.4024V24.4356C199.37%2026.1631%20198.453%2027.3092%20197.056%2027.9072L199.742%2031.8522H196.139L193.874%2028.4304H192.502V31.8522H189.386V20.5405ZM194.56%2025.9638C195.618%2025.9638%20196.23%2025.4488%20196.23%2024.6266V24.5934C196.23%2023.7047%20195.585%2023.2563%20194.543%2023.2563H192.502V25.9721H194.56V25.9638Z'%20fill='white'/%3e%3cpath%20d='M203.867%2020.5405H212.918V23.2064H206.958V24.9173H212.356V27.384H206.958V29.1779H213V31.8439H203.867V20.5405Z'%20fill='white'/%3e%3cpath%20d='M82.4645%2027.5501C82.0264%2028.5384%2081.1089%2029.2443%2079.8856%2029.2443C78.183%2029.2443%2077.0093%2027.8241%2077.0093%2026.188V26.1548C77.0093%2024.527%2078.1499%2023.1317%2079.8526%2023.1317C81.1337%2023.1317%2082.1173%2023.929%2082.5306%2025.0087H85.8202C85.2912%2022.3178%2082.9438%2020.3079%2079.8856%2020.3079C76.4142%2020.3079%2073.8105%2022.9407%2073.8105%2026.188V26.2212C73.8105%2029.4686%2076.3811%2032.0681%2079.8526%2032.0681C82.8199%2032.0681%2085.1425%2030.133%2085.7541%2027.5418H82.4645V27.5501Z'%20fill='white'/%3e%3c/svg%3e",
      description: "For innovative use of Cloudflare's technologies"
    },
    {
      sponsor: "Sentry",
      amount: "$50,000",
      logoUrl: "src/assets/images/sentry.png",
      description: "For best implementation of monitoring and error tracking"
    },
    {
      sponsor: "Loops",
      amount: "$25,000",
      logoUrl: "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTA3IDI0Ij48cGF0aCBkPSJNIDEzLjYwMSAwIEwgMTAuMzcxIDAgQyA0LjY0NSAwLjAwNyAwLjAwNSA0LjYzOCAwIDEwLjM1MiBDIDAuMDA3IDE2LjA2NSA0LjY0NiAyMC42OTQgMTAuMzcxIDIwLjcwMSBMIDEzLjYxMyAyMC43MDEgQyAxOS4zMzkgMjAuNjk2IDIzLjk4IDE2LjA2NiAyMy45ODcgMTAuMzUyIEMgMjMuOTgxIDQuNjMyIDE5LjMzMyAtMC4wMDEgMTMuNjAxIDAgWiBNIDEuMjg0IDEwLjM1MiBDIDEuMjg0IDUuMzQ3IDUuMzQ5IDEuMjkxIDEwLjM2NCAxLjI5MSBDIDEwLjg3MSAxLjI5MSAxMS4zNzggMS4zMzIgMTEuODc4IDEuNDE2IEMgMTYuMjU0IDIuMTM4IDE5LjQ1OCA1LjkyMSAxOS40NDIgMTAuMzQ3IEMgMTkuNDM3IDEzLjE4OCAxNy4zODIgMTUuNjEyIDE0LjU3NSAxNi4wODcgQyAxNi40MTIgMTQuNzQ5IDE3LjQ5NyAxMi42MTYgMTcuNDk1IDEwLjM0NyBDIDE3LjUwMSA3LjEgMTUuMyA0LjI2MyAxMi4xNDggMy40NTYgQyAxMS41NjUgMy4zMDUgMTAuOTY2IDMuMjMgMTAuMzY0IDMuMjMgQyA2LjQzMiAzLjI0MiAzLjI1MSA2LjQyNCAzLjI0NyAxMC4zNDcgQyAzLjIzNyAxMy45MDIgNS4wNjEgMTcuMjExIDguMDc0IDE5LjEwNyBDIDQuMDg1IDE4LjA2MiAxLjMgMTQuNDY4IDEuMjkxIDEwLjM1MiBaIE0gMTEuOTgxIDQuNzYxIEMgMTQuNDc4IDUuNDc4IDE2LjE5NyA3Ljc1OSAxNi4xOTUgMTAuMzUyIEMgMTYuMTk2IDEyLjk0NCAxNC40NzcgMTUuMjIzIDExLjk4MSAxNS45NCBDIDkuNDg1IDE1LjIyMyA3Ljc2NyAxMi45NDQgNy43NjcgMTAuMzUyIEMgNy43NjUgNy43NTkgOS40ODQgNS40NzggMTEuOTgxIDQuNzYxIFogTSAxMy42MDEgMTkuNDA4IEwgMTMuNTY0IDE5LjQwOCBDIDEzLjA3MSAxOS40MDUgMTIuNTc4IDE5LjM2NCAxMi4wOTEgMTkuMjgzIEMgNy44MzEgMTguNTc4IDQuNjY2IDE0Ljk2MyA0LjUzOCAxMC42NTYgTCA0LjUzOCAxMC4zNTIgQyA0LjU0MSA3LjUxIDYuNTk3IDUuMDg1IDkuNDA0IDQuNjExIEMgNy41NjcgNS45NDkgNi40ODEgOC4wODIgNi40ODEgMTAuMzUyIEMgNi40NzcgMTMuNTk4IDguNjc4IDE2LjQzNCAxMS44MjkgMTcuMjQxIEMgMTIuNDExIDE3LjM5MiAxMy4wMTEgMTcuNDY4IDEzLjYxMyAxNy40NjYgQyAxNy41NDkgMTcuNDYyIDIwLjczOSAxNC4yOCAyMC43NDUgMTAuMzUyIEMgMjAuNzU2IDYuNzk3IDE4LjkzMiAzLjQ4NyAxNS45MTcgMS41OTIgQyAxOS45MDYgMi42MzkgMjIuNjg3IDYuMjM2IDIyLjY4OCAxMC4zNTIgQyAyMi42ODcgMTIuNzU1IDIxLjcyOSAxNS4wNiAyMC4wMjQgMTYuNzU4IEMgMTguMzIgMTguNDU3IDE2LjAwOSAxOS40MSAxMy42MDEgMTkuNDA4IFoiIGZpbGw9InJnYigyNTIsODIsMCkiPjwvcGF0aD48cGF0aCBkPSJNIDQ0Ljc1MSAxOC44OTYgTCAyOS45OCAxOC44OTYgTCAyOS45OCAxNy4yMzMgQyAzMS44MDEgMTYuOTI3IDMyLjE1OSAxNi4yODggMzIuMTU5IDE1LjY3MyBMIDMyLjE1OSA1LjI1OCBDIDMyLjE1OSA0LjA4MiAzMS44MDEgMy41OTUgMjkuOTggMy40NjggTCAyOS45OCAxLjgwNSBMIDM5LjI2NCAxLjgwNSBMIDM5LjI2NCAzLjQ2OCBDIDM3LjQ0MyAzLjU5NSAzNy4wODQgNC4wODIgMzcuMDg0IDUuMjU4IEwgMzcuMDg0IDE2LjI3OCBDIDM3LjA4NCAxNi44OTEgMzcuMjYzIDE3LjMyNyAzOC44MDIgMTcuMzI3IEwgNDAuNDY5IDE3LjMyNyBDIDQxLjQxNiAxNy4zMjcgNDIuNTQ1IDE2Ljg2NiA0My4zNCAxNC4zNTggTCA0NS4wMDYgMTQuMzU4IFogTSA0Ni4wODQgMTIuNjI3IEMgNDYuMDg0IDguNDgzIDQ5LjA4NSA1LjQxMiA1My4zNCA1LjQxMiBDIDU3LjgyOSA1LjQxMiA2MC40MTggOC40MzIgNjAuNDE4IDEyLjExNSBDIDYwLjQxOCAxNi4yMzcgNTcuMzY4IDE5LjI1NiA1My4xODggMTkuMjU2IEMgNDguNjI0IDE5LjI1NiA0Ni4wODQgMTYuMzEzIDQ2LjA4NCAxMi42MjcgWiBNIDU1LjU5OCAxMy41NzUgQyA1NS41OTggOS41MDcgNTQuMTg3IDcuMDc1IDUyLjgwMyA3LjA3NSBDIDUxLjQ5NSA3LjA3NSA1MC45NTggOC43MTMgNTAuOTU4IDExLjA2NyBDIDUwLjk1OCAxNS4yMTMgNTIuMzkzIDE3LjU5MyA1My43NSAxNy41OTMgQyA1NS4wMzYgMTcuNTkzIDU1LjU5OCAxNS45OCA1NS41OTggMTMuNTc1IFogTSA2Mi4wMDggMTIuNjI3IEMgNjIuMDA4IDguNDgzIDY1LjAxIDUuNDEyIDY5LjI2NSA1LjQxMiBDIDczLjc1NCA1LjQxMiA3Ni4zNDMgOC40MzIgNzYuMzQzIDEyLjExNSBDIDc2LjM0MyAxNi4yMzcgNzMuMjkzIDE5LjI1NiA2OS4xMTEgMTkuMjU2IEMgNjQuNTQ4IDE5LjI1NiA2Mi4wMDggMTYuMzEzIDYyLjAwOCAxMi42MjcgWiBNIDcxLjUyMyAxMy41NzUgQyA3MS41MjMgOS41MDcgNzAuMTEyIDcuMDc1IDY4LjcyOCA3LjA3NSBDIDY3LjQyIDcuMDc1IDY2Ljg4IDguNzEzIDY2Ljg4IDExLjA2NyBDIDY2Ljg4IDE1LjIxMyA2OC4zMTggMTcuNTkzIDY5LjY3NSAxNy41OTMgQyA3MC45NTkgMTcuNTkzIDcxLjUyMyAxNS45OCA3MS41MjMgMTMuNTc1IFogTSA5Mi4xNzIgMTEuOTEyIEMgOTIuMTcyIDE2LjM4OSA4OS40NTUgMTkuMjU5IDg1LjUzMSAxOS4yNTkgQyA4NC43NCAxOS4yNzMgODMuOTU0IDE5LjEyNSA4My4yMjIgMTguODIzIEwgODMuMjIyIDIwLjcxNiBDIDgzLjIyMiAyMS42NjQgODMuNjA3IDIyLjA0OCA4NS4zNTIgMjIuMzAzIEwgODUuMzUyIDIzLjk3NiBMIDc2Ljk2NiAyMy45NzYgTCA3Ni45NjYgMjIuMzEzIEMgNzguMjk5IDIyLjAwNyA3OC40NTQgMjEuNjczIDc4LjQ1NCAyMC43MjYgTCA3OC40NTQgOS40NiBDIDc4LjQ1NCA4Ljc5NCA3OC4yMjMgOC40MSA3Ny4zNzYgOC4wMjggTCA3Ni45NjYgNy44NDkgTCA3Ni45NjYgNi41MTcgTCA4Mi4xOTYgNS40MTcgTCA4My4yMjIgNS40MTcgTCA4My4yMjIgNy4wNTYgQyA4My44ODEgNi4wMTMgODUuMDQgNS4zOTEgODYuMjc1IDUuNDE3IEMgOTAuMzUxIDUuNDEyIDkyLjE3MiA4LjU0NyA5Mi4xNzIgMTEuOTEyIFogTSA4Ny4yNDkgMTIuODMzIEMgODcuMjQ5IDEwLjE3MSA4Ni41MTMgNy44NjkgODQuNzM2IDcuODY5IEMgODMuOTY2IDcuODY5IDgzLjgzOCA3LjgxNyA4My4yMjIgOC4yNzggTCA4My4yMjIgMTMuNDIgQyA4My4yMjIgMTYuNDY3IDgzLjcxMyAxNy4zNjMgODUuMDQzIDE3LjM2MyBDIDg2LjI3NSAxNy4zNjMgODcuMjQ5IDE1Ljg1MiA4Ny4yNDkgMTIuODMzIFogTSAxMDQuNTY2IDYuOTIxIEwgMTAyLjIwNyAxMC4xNDYgQyAxMDEuMDc4IDcuODkzIDk5Ljk5OCA2Ljk0OCA5OC43MiA2Ljk0OCBDIDk3Ljk0OSA2Ljk0OCA5Ni45NSA3LjQwOCA5Ni45NSA4LjIwMiBDIDk2Ljk1IDEwLjg5NiAxMDQuOTc1IDkuMTQ3IDEwNC44MjMgMTUuMDg2IEMgMTA0Ljc0NSAxNy4yMzMgMTAyLjY2OCAxOS4yNDkgOTkuMDc4IDE5LjI0OSBDIDk1Ljk0OSAxOS4yNDkgOTMuMzM1IDE3LjY4NyA5Mi42OTcgMTcuMTIzIEwgOTUuNDY4IDE0LjIzMyBDIDk3LjAwNyAxNi42MzggOTguMjYzIDE3LjcxMyA5OS40OTMgMTcuNzEzIEMgMTAwLjEzMyAxNy43MTMgMTAxLjI2MiAxNy40MzIgMTAxLjI4OSAxNi4xNzggQyAxMDEuMjg5IDEzLjI4NiA5My4zNjUgMTUuNjE1IDkzLjM4OSA5LjgxMSBDIDkzLjM4OSA3LjA3MyA5NS42NzIgNS40MDIgOTkuMzE0IDUuNDAyIEMgMTAyLjE4IDUuNDEyIDEwNC4wMjggNi40MDkgMTA0LjU2NiA2LjkyMSBaIiBmaWxsPSJyZ2IoNTUsMTgsMCkiPjwvcGF0aD48L3N2Zz4=",
      description: "For the best email integration"
    },
    {
      sponsor: "Algorand Foundation",
      amount: "$25,000",
      logoUrl: "https://algorand.co/hubfs/Website-2024/Typography/algorand-logo-light.svg",
      description: "For best use of blockchain technology"
    },
  ];
   // Create falling dollar animations on scroll
    useEffect(() => {
    if (!dollarsRef.current) return;
    
    const dollarsContainer = dollarsRef.current;
    const dollarCount = 30;
    
    // Listen to scroll events to trigger dollars
    const handleScroll = () => {
      
      // Create new dollar when scrolling past threshold
      if (window.scrollY > 100 && dollarsContainer.childNodes.length < dollarCount) {
        createDollar();
      }
    };
    
    const createDollar = () => {
      const dollar = document.createElement('div');
      
      // Dollar sign styling
      const size = Math.random() * 30 + 10;
      const startX = Math.random() * 100;
      const opacity = Math.random() * 0.7 + 0.3;
      const rotation = Math.random() * 360;
      
      dollar.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-neon-cyan"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`;
      dollar.className = 'absolute z-10';
      dollar.style.left = `${startX}%`;
      dollar.style.top = '0';
      dollar.style.opacity = opacity.toString();
      dollar.style.transform = `rotate(${rotation}deg)`;
      dollar.style.color = '#00FFFF';
      dollar.style.filter = 'drop-shadow(0 0 5px rgba(0, 255, 255, 0.7))';
      
      dollarsContainer.appendChild(dollar);
      
      // Animate dollar falling
      gsap.to(dollar, {
        y: window.innerHeight,
        x: `${(Math.random() - 0.5) * 200}`,
        rotation: `${rotation + Math.random() * 360}`,
        opacity: 0,
        duration: Math.random() * 5 + 3,
        ease: 'power1.in',
        onComplete: () => {
          if (dollarsContainer.contains(dollar)) {
            dollarsContainer.removeChild(dollar);
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial dollars
    for (let i = 0; i < 5; i++) {
      createDollar();
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      while (dollarsContainer.firstChild) {
        dollarsContainer.removeChild(dollarsContainer.firstChild);
      }
    };
  }, []);
  
  return (
    <section id="prizes" className="relative py-20 md:py-32 bg-space-blue overflow-hidden">
         
      {/* Falling dollar animations container */}
      <div ref={dollarsRef} className="inset-0 overflow-hidden z-[4] pointer-events-none" />
      
      {/* Background glow elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-electric-purple/20 blur-[100px] z-0" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-neon-cyan/20 blur-[100px] z-0" />
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-stellar-white mb-6">
              <span className="text-neon-cyan">$1,000,000+</span> in Prizes
            </h2>
            <p className="text-lg text-stellar-white/70 max-w-3xl mx-auto">
              Compete for a share of over $1 million across multiple prize categories, recognizing excellence in different aspects of web app development.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {prizeCategories.map((prize, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl bg-cosmic-black/70 border border-electric-purple/30 hover:border-electric-purple/50 backdrop-blur-sm transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: '0 10px 30px -10px rgba(138, 43, 226, 0.3)' }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-space-blue/80 rounded-lg mr-4">
                      {prize.icon}
                    </div>
                    <h3 className="text-xl font-display font-bold text-stellar-white">
                      {prize.title}
                    </h3>
                  </div>
                  <div className="text-3xl font-display font-bold text-neon-cyan mb-4">
                    {prize.amount}
                  </div>
                  <p className="text-stellar-white/70">
                    {prize.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-stellar-white mb-6">
              Sponsor Prizes
            </h3>
            <p className="text-lg text-stellar-white/70 max-w-3xl mx-auto mb-12">
              Additional prizes provided by our amazing sponsors for specific categories and technologies.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sponsorPrizes.map((prize, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl bg-space-blue/50 border border-neon-cyan/20 hover:border-neon-cyan/40 backdrop-blur-sm transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: '0 10px 30px -10px rgba(0, 255, 255, 0.2)' }}
                >
                  <img src={prize.logoUrl} alt={`${prize.sponsor} logo`} className="h-8 mb-4 object-contain"/>
                  {/* <div className="text-xl font-display font-bold text-stellar-white mb-2">
                    {prize.sponsor}
                  </div> */}
                  <div className="text-2xl font-display font-bold text-neon-cyan mb-3">
                    {prize.amount}
                  </div>
                  <p className="text-stellar-white/70">
                    {prize.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrizesSection; 