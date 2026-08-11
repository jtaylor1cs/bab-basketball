import esfaceWorkout from '../assets/Esfaceworkout.jpg'
import ucMerced from '../assets/UCMercedFreeThrow.jpg'
import kingsDribbling from "../assets/King'sDribbling.PNG"
import sectionChamp from '../assets/SectionChampionship.PNG'
import { IconTrophy, IconStar, IconUsers } from './icons'
import Reveal from './Reveal'

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeKpqHvbFJSxcsAB_Gy7gbuOX0s1uPLK3cVf9AkOC_SX9kyNQ/viewform?usp=publish-editor'

const badges = [
  { icon: IconTrophy, label: '5+ Years Coaching' },
  { icon: IconStar, label: 'Starting Point Guard & Team Captain, UC Merced' },
  { icon: IconUsers, label: 'Section Champion, King’s Academy' },
]

// Each column pairs one portrait photo with one landscape photo so the frame's
// aspect ratio can match the photo's real aspect ratio (no letterboxing, no
// harsh cropping). Right column starts staggered lower so the pair reads like
// a collage instead of one flat line of photos.
const leftColumn = [
  { src: esfaceWorkout, alt: 'Coach Jon training', rotate: '-1.5deg', color: '#B94B35', ratio: 1638 / 2048 },
  { src: sectionChamp, alt: 'Section Championship', rotate: '-1deg', color: '#C49A2D', ratio: 750 / 605 },
]

const rightColumn = [
  { src: kingsDribbling, alt: 'Kings Academy', rotate: '1deg', color: '#4A7FA5', ratio: 599 / 879 },
  { src: ucMerced, alt: 'UC Merced', rotate: '1.5deg', color: '#2D6A5A', ratio: 2048 / 1365 },
]

const mobilePhotos = [...leftColumn, ...rightColumn]

function PhotoFrame({ photo, className = '', style = {} }) {
  return (
    <div
      className={`rounded-md hard-border hard-shadow-sm overflow-hidden ${className}`}
      style={{ backgroundColor: '#F5EFE0', transform: `rotate(${photo.rotate})`, borderLeft: `5px solid ${photo.color}`, ...style }}
    >
      <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
    </div>
  )
}

function About() {
  return (
    <section id="about" style={{ backgroundColor: '#EDE8D5' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col md:flex-row gap-14 items-start md:items-stretch py-28">

        <Reveal className="flex-1">
          <div className="flex flex-col gap-6">
            <div>
              <p style={{ color: '#B94B35' }} className="text-sm font-bold tracking-widest uppercase mb-3">
                The Coach
              </p>
              <h2 className="font-display uppercase text-4xl md:text-5xl mb-6" style={{ color: '#2C1A0E' }}>
                Meet Coach Jon
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span
                  key={badge.label}
                  style={{ backgroundColor: '#F5EFE0', border: '2.5px solid #2C1A0E', color: '#2C1A0E' }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold"
                >
                  <badge.icon size={18} style={{ color: '#B94B35' }} />
                  {badge.label}
                </span>
              ))}
            </div>

            <p style={{ color: '#2C1A0E' }} className="leading-relaxed text-lg opacity-80">
              I'm Coach Jon Taylor. I have 5 years of coaching experience, have been a director-level camp coach at Team Esface, and am a current team captain at UC Merced. I am a senior student-athlete studying Computer Science and Engineering. I've trained hundreds of young players and I know how to meet kids where they are and push them to the next level.
              Growing up in the Bay Area, I led King's Academy to its first section championship and finished as the all-time leader in points and triple doubles. Now I am starting at point guard for UC Merced, leading the team in assists and steals.
            </p>

            <p style={{ color: '#2C1A0E' }} className="leading-relaxed text-lg opacity-80">
              I want to help build confident, competitive players. We work on mentality, game IQ, and holding yourself to a higher standard on and off the court.
            </p>

            <p style={{ color: '#2C1A0E' }} className="leading-relaxed text-lg opacity-80">
              I started BAB Training because great coaches changed my path, and I see that same potential in every kid who steps in the gym. Whether they're picking up a ball for the first time or chasing a varsity spot, my goal is to help them get closer to theirs.
            </p>

            <a href={FORM_URL} target="_blank" rel="noreferrer">
              <button
                style={{ backgroundColor: '#B94B35', color: '#EDE8D5' }}
                className="py-3 px-8 font-bold rounded tracking-wide hover:opacity-90 transition w-fit hard-shadow-sm"
              >
                Work With Me
              </button>
            </a>
          </div>
        </Reveal>

        <Reveal delay={150} className="hidden md:flex gap-4 shrink-0" style={{ width: '300px' }}>
          <div className="flex flex-col gap-4 justify-center" style={{ width: '48%' }}>
            {leftColumn.map((photo) => (
              <PhotoFrame key={photo.alt} photo={photo} style={{ aspectRatio: photo.ratio }} />
            ))}
          </div>
          <div className="flex flex-col gap-4 justify-center" style={{ width: '48%' }}>
            {rightColumn.map((photo) => (
              <PhotoFrame key={photo.alt} photo={photo} style={{ aspectRatio: photo.ratio }} />
            ))}
          </div>
        </Reveal>

        <div className="flex-1 grid grid-cols-2 gap-3 md:hidden">
          {mobilePhotos.map((photo) => (
            <PhotoFrame key={photo.alt} photo={photo} className="h-48" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
