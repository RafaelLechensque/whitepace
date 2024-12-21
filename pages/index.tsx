import Button from "@/components/Button";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ReactNode } from "react";
import { LuCircleCheckBig } from "react-icons/lu";
import AppleBlack from "../assets/image/Apple.png";
import Avatar1 from "../assets/image/Avater1.png";
import Avatar2 from "../assets/image/Avater2.png";
import Avatar3 from "../assets/image/Avater3.png";
import BackGround from "../assets/image/BACKGROUND.png";
import BackGround2 from "../assets/image/BACKGROUND2.png";
import ElementImg from "../assets/image/Element.png";
import ElementImg1 from "../assets/image/Element11.png";
import ElementTitle from "../assets/image/Element3.png";
import ElementImg2 from "../assets/image/Element4.png";
import ElementImg3 from "../assets/image/Apps.png";
import ElementTitleBlue from "../assets/image/ElementBlue.png";
import Google from "../assets/image/Google.png";
import Microsoft from "../assets/image/Microsoft.png";
import QuoteBlue from "../assets/image/QuoteBlue.png";
import QuoteWhite from "../assets/image/QuoteWhite.png";
import Apple from "../assets/image/apple-black-logo 2.png";
import Android from "../assets/image/android-logo 1.png";
import Windons from "../assets/image/Windons.png";
import Slack from "../assets/image/Slack.png";
import WorkTogetherImage from "../assets/image/Work Together Image.png";

interface cardProps {
  direction: 'right' | 'left'
  bgIsWhite: boolean
  title: string
  descryption: string
  butttonText: string
  imgPlaceHold: ImageProps
  img?: StaticImport | string
}

interface planesProps {
  title: string
  price: number
  description: string
  itens: string[]
  emphasis: boolean
}

interface clientPorps {
  comment: string
  avatar: StaticImport | string
  name: string
  department: string
  firm: string
  bgIsWhite: boolean
}

interface ImageProps {
  width: number
  height: number
}
const genImage = ({ width, height }: ImageProps) => {
  return <Image
    alt={`image placehold ${width}x${height}`}
    src={`https://placehold.co/${width}x${height}`}
    width={width}
    height={height}
    className="z-10"
  />
}

const planes: planesProps[] = [
  {
    title: 'Free',
    price: 0,
    description: 'Capture ideas and find them quickly',
    itens: [
      'Sync unlimited devices', '10 GB monthly uploads', '200 MB max. note size', 'Customize Home dashboard and access extra widgets',
      'Connect primary Google Calendar account', 'Add due dates, reminders, and notifications to your tasks'
    ],
    emphasis: false
  },
  {
    title: 'Personal',
    price: 11.99,
    description: 'Keep home and family on track',
    itens: [
      'Sync unlimited devices', '10 GB monthly uploads', '200 MB max. note size', 'Customize Home dashboard and access extra widgets',
      'Connect primary Google Calendar account', 'Add due dates, reminders, and notifications to your tasks'
    ],
    emphasis: true
  },
  {
    title: 'Organization',
    price: 49.99,
    description: 'Capture ideas and find them quickly',
    itens: [
      'Sync unlimited devices', '10 GB monthly uploads', '200 MB max. note size', 'Customize Home dashboard and access extra widgets',
      'Connect primary Google Calendar account', 'Add due dates, reminders, and notifications to your tasks'
    ],
    emphasis: false
  },
]

const imagesPlaceHold: ImageProps[] = [
  { width: 824, height: 549 },
  { width: 748, height: 547 },
  { width: 686, height: 479 },
  { width: 714, height: 532 },
]

const clients: clientPorps[] = [
  {
    avatar: Avatar1,
    bgIsWhite: true,
    name: 'Oberon Shaw',
    firm: 'MCH',
    comment: 'Whitepate is designed as a collaboration tool for businesses that is a full project management solution.',
    department: 'Head of Talent Acquisition, North America',
  },
  {
    avatar: Avatar2,
    bgIsWhite: false,
    name: 'Oberon Shaw',
    firm: 'MCH',
    comment: 'Whitepate is designed as a collaboration tool for businesses that is a full project management solution.',
    department: 'Head of Talent Acquisition, North America',
  },
  {
    avatar: Avatar3,
    bgIsWhite: false,
    name: 'Oberon Shaw',
    firm: 'MCH',
    comment: 'Whitepate is designed as a collaboration tool for businesses that is a full project management solution.',
    department: 'Head of Talent Acquisition, North America',
  },
]

export default function Home() {
  return (
    <main className="">
      {/* Hero-section */}
      <SectionControl className="bg-primary py-32 flex flex-row items-center">
        <Image alt="Element" src={ElementImg} className="-z-1 my-32 py-32 " fill />
        <header className=" flex flex-col gap-16">
          <div className="text-white gap-6 flex flex-col">
            <h1 className="font-bold text-6xl">Get More Done with whitepace</h1>
            <p className="font-normal text-lg">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
          </div>
          <Button bg="secondary" icon="arrow-right">Try Whitepace free</Button>
        </header>
        {genImage(imagesPlaceHold[0])}

      </SectionControl>
      {/* Work-management */}
      <SectionControl className=" relative" >
        <Card
          bgIsWhite
          title="Project| Management"
          butttonText="Get Started"
          descryption="Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. 
          Take photos with the mobile app and save them to a note."
          direction="right"
          imgPlaceHold={imagesPlaceHold[1]}
        />
        <Image alt="" src={BackGround} className="absolute top-32 -left-10 -z-10" />
        <Card
          bgIsWhite
          title="Work| together"
          butttonText="Try it now"
          descryption="With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to 
          the internet and share the URL with others."
          direction="left"
          img={WorkTogetherImage}
          imgPlaceHold={imagesPlaceHold[1]}
        />
      </SectionControl>
      {/* Customise it to your needs */}
      <SectionControl className=" py-1 bg-primary -z-20 relative">

        <Card
          bgIsWhite={false}
          butttonText="Let’s Go"
          descryption="Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes."
          direction="right"
          imgPlaceHold={imagesPlaceHold[2]}
          title="Use as| Extension"
        />
      </SectionControl>
      {/* Customise it to your needs */}
      <SectionControl className="">
        <Card
          bgIsWhite
          butttonText="Let’s Go"
          descryption="Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your
           own scripts and plugins using the Extension API."
          direction="left"
          imgPlaceHold={imagesPlaceHold[3]}
          title="Customise it to| your needs"
        />
      </SectionControl>
      {/* Pricing */}
      <SectionControl className="flex flex-col pb-36  items-center gap-16">
        <header className="text-black gap-12 max-w-5xl text-center ">
          <div className=" gap-6 flex flex-col items-center  ">
            <div className="font-bold text-6xl flex gap-4 flex-row">
              <h1 className="">Choose</h1>
              <h1 className="relative w-max " >
                Your Plan
                <Image alt="Element" src={ElementTitle} className="absolute w-full -z-10 top-10" />
              </h1>
            </div>
            <p className="font-normal text-lg">Whether you want to get organized, keep your personal
              life on track, or boost workplace productivity, Evernote has the right plan for you.</p>
          </div>
        </header>

        <div className="flex justify-between gap-8 ">
          {planes.map(plane => (
            <PriceBoard
              description={plane.description}
              emphasis={plane.emphasis}
              itens={plane.itens}
              price={plane.price}
              title={plane.title}
              key={plane.title}
            />
          ))}
        </div>

      </SectionControl>
      {/* Your-work */}
      <SectionControl className="bg-primary -z-20 relative py-36 ">
        <Image alt="" src={BackGround2} className="absolute -z-10 -top-36 -left-8 " />
        <header className="flex flex-col items-center gap-16 ">

          <div className=" gap-6 flex flex-col text-white justify-center items-center text-center  ">
            <div className="font-bold text-6xl flex gap-4 flex-row ">
              <h1 className="">Your work, everywhere </h1>
              <h1 className="relative w-max " >
                you are
                <Image alt="Element" src={ElementTitleBlue} className="absolute w-full -z-10 top-12 " />
              </h1>
            </div>
            <p className="font-normal text-lg w-fit">
              Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace,
              Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also
              available!
            </p>
          </div>
          <Button bg="secondary" icon="arrow-right">Try Taskey</Button>
        </header>
      </SectionControl>
      {/* Your data */}
      <SectionControl className="">
        <Card
          bgIsWhite
          butttonText="Read more"
          descryption="The app is open source and your notes are saved to an open format, so you'll always have access to them.
           Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them."
          direction="right"
          imgPlaceHold={{ height: 0, width: 0 }}
          title="100% |your data"
          img={ElementImg2}
        />
      </SectionControl>
      {/* Our sponsors */}
      <SectionControl className="pb-36">
        <header className="flex flex-col items-center gap-24">

          <div className="font-bold text-6xl flex gap-4 flex-row ">
            <h1 className="">Our </h1>
            <h1 className="relative w-max " >
              sponsors
              <Image alt="Element" src={ElementTitle} className="absolute w-full -z-10 top-10" />
            </h1>
          </div>
          <ul className="flex flex-row items-center justify-between w-full ">
            <li>
              <Image alt="" src={AppleBlack} />
            </li>
            <li>
              <Image alt="" src={Google} />
            </li>
            <li>
              <Image alt="" src={Microsoft} />
            </li>
            <li>
              <Image alt="" src={Slack} />
            </li>
          </ul>
        </header>

      </SectionControl>
      {/* Apps */}
      <SectionControl className="bg-primary -z-20 relative py-1">
        <Image alt="Element" src={ElementImg1} className="-z-10" fill />
        <Card
          bgIsWhite={false}
          butttonText="Read more"
          descryption="Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all
         the tools you need for your project success."
          direction="left"
          title="Work with Your Favorite Apps Using whitepace|"
          img={ElementImg3}
          imgPlaceHold={{ height: 0, width: 0 }}
        />

      </SectionControl>
      {/* Testimonial */}
      <SectionControl className="flex flex-col items-center gap-14 pb-36">
        <header className="flex flex-col items-center gap-24">

          <div className="font-bold text-6xl flex gap-4 flex-row ">
            <h1 className="">What Our Clients</h1>
            <h1 className="relative w-48 text-center  -left-6" >
              Says
              <Image alt="Element" src={ElementTitle} className="absolute w-full h-full -z-10 top-0  left-4" />
            </h1>
          </div>

        </header>
        <div className="flex justify-between w-full gap-8">
          {clients.map(cli => (
            <ClientCard
              avatar={cli.avatar}
              bgIsWhite={cli.bgIsWhite}
              comment={cli.comment}
              department={cli.department}
              firm={cli.firm}
              name={cli.name}
              key={null}
            />
          ))}
        </div>
        <ul className="flex gap-2">
          <li className="w-3 h-3 rounded-full bg-primary-2"></li>
          <li className="w-3 h-3 rounded-full bg-primary"></li>
          <li className="w-3 h-3 rounded-full bg-primary-2"></li>
        </ul>
      </SectionControl>
      {/* Free Trial */}
      <SectionControl className="bg-primary text-white flex flex-col gap-10 text-2xl items-center pt-36 pb-9" >
        <div className="flex flex-col gap-6 w-2/5 text-center">

          <h1 className="font-bold text-7xl">Try Whitepace today</h1>
          <p>Get started for free. Add your whole team as your needs grow.</p>
        </div>
        <Button bg="secondary" icon="arrow-right">Try Taskey free</Button>
        <p>On a big team? Contact sales</p>
        <div className="flex gap-10">
          <Image alt="" src={Apple} />
          <Image alt="" src={Windons} />
          <Image alt="" src={Android} />
        </div>
      </SectionControl>
    </main>
  );
}

export function SectionControl({ children, className }: { className?: string, children?: ReactNode }) {
  return (<section className={`px-10 ${className}`}>{children}</section>)
}


export function Card({ butttonText, descryption, direction, img, title, imgPlaceHold, bgIsWhite }: cardProps) {

  const a = title.split("|")
  const textColor = bgIsWhite ? "text-black" : "text-white"

  return (
    // <div className="flex justify-center gap-16 my-36 items-center">
    <div className="flex gap-16 my-36 items-center justify-between">
      {direction == 'left' ? (img ? <Image alt="" src={img} /> : genImage(imgPlaceHold)) : undefined}
      <header className={`${textColor} flex flex-col gap-12 max-w-2xl `}>
        <div className=" gap-6 flex flex-col">
          <div className={`font-bold text-6xl flex gap-4 ${a[1].length > 9 ? "flex-col" : "flex-row"}`}>
            <h1 className="">{a[0]}</h1>
            <h1 className="relative w-max " >
              {a[1]}
              <Image alt="Element" src={ElementTitle} className={`absolute w-full -z-10 ${a[1].length > 9 ? "top-9" : "top-10"}`} />
            </h1>
          </div>
          <p className="font-normal text-lg">{descryption}</p>
        </div>
        <Button bg="secondary" icon="arrow-right">{butttonText}</Button>
      </header>
      {direction == 'right' ? (img ? <Image alt="" src={img} /> : genImage(imgPlaceHold)) : undefined}

    </div>
  )
}

export function PriceBoard({ description, emphasis, itens, price, title }: planesProps) {

  if (emphasis) {
    return (
      <div className="bg-primary text-white rounded-xl px-11 py-10 flex flex-col gap-6 justify-center" >
        <div className="flex flex-col gap-6 font-medium">
          <h2 className="text-2xl font-semibold ">{title}</h2>
          <h1 className="text-4xl font-bold text-secondary-y">${price}</h1>
          <h3 className="text-lg ">{description}</h3>
        </div>
        <ul className="text-base flex flex-col gap-7">
          {itens.map(d => (
            <li key={d} className="flex items-center gap-5 leading-tight">
              <LuCircleCheckBig height={18} color="FFE492" />
              {d}
            </li>
          ))}
        </ul>
        <Button bg="secondary" >Get Started</Button>
      </div>
    )
  } else {
    return (
      <div className="border-2 border-secondary-y rounded-xl px-11 py-10 my-10 flex flex-col gap-6 justify-center max-h-" >
        <div className="flex flex-col gap-6 font-medium">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <h1 className="text-4xl font-bold">${price}</h1>
          <h3 className="text-lg ">{description}</h3>
        </div>
        <ul className="text-base flex flex-col gap-7">
          {itens.map(d => (
            <li key={d} className="flex items-center gap-5 leading-tight">
              <LuCircleCheckBig height={18} />
              {d}
            </li>
          ))}
        </ul>
        <Button bg="outline" >Get Started</Button>
      </div>
    )
  }
}

export function ClientCard({ avatar, bgIsWhite, comment, department, firm, name }: clientPorps) {

  return (
    <div className={`${bgIsWhite ? "bg-white drop-shadow-md shadow-sm  " : "bg-primary-2"} flex flex-col gap-14 py-16 px-10 rounded-xl font-normal`}>
      <div className="flex flex-col gap-8 pb-10 border-b-2 border-black">
        <Image alt="" width={86} src={bgIsWhite ? QuoteBlue : QuoteWhite} />
        <p className="text-lg ">{comment}</p>
      </div>
      <div className="flex gap-10">
        <Image alt="" src={avatar} />
        <div>
          <h2 className="text-2xl font-semibold">{name + ", " + firm}</h2>
          <p className="text-base">{department}</p>
        </div>
      </div>
    </div>
  )
}