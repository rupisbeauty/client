
export interface Service {
  title: string;
  description: string;
  image: string;
  items: string[];
  packages?: string[];
}

export const services: Service[] = [
  {
    title: 'Threading',
    description:
      'Our licensed Estheticians have the experience to help you with all of your threading needs',
    image: 'placeholder-rect.jpeg',
    items: [
      'Eyebrows',
      'Lip',
      'Lower Lip',
      'Chin',
      'Chin + Lower C',
      'Sides',
      'Neck',
      'Full Face',
    ],
  },
  {
    title: 'Waxing',
    description:
      'Our licensed Estheticians have the experience to help you with all of your waxing needs',
    image: 'placeholder-rect.jpeg',
    items: [
      'Eyebrows',
      'Lip',
      'Lower Lip',
      'Chin',
      'Chin + Lower C',
      'Sides',
      'Neck',
      'Full Face',
      'Nose (Inside)',
      'Nose (Outside)',
    ],
  },
  {
    title: 'Tinting',
    description:
      'Our licensed Estheticians have the experience to help you with all of your tinting needs',
    image: 'placeholder-rect.jpeg',
    items: ['Brows + Tint', 'Brow Tint', 'Last Tint'],
    packages: [
      'Lashlift + Tint',
      'Brow Lamination + Shaping + Tinting',
      'Lashlift + Brow Lamination',
    ],
  },
];

export const body: Service[] = [
  {
    title: 'Soft Wax',
    description: 'Soft waxing service',
    image: 'placeholder-rect.jpeg',
    items: [
      'Bikini',
      'Brazilian',
      'Butt',
      'Underarm',
      'Half Arm',
      'Full Arm',
      'Upper Legs',
      'Lower Legs',
      'Full Legs',
      'Back',
      'Stomach',
      'Chest',
    ],
  },
  {
    title: 'Hard Wax',
    description: 'Hard waxing service',
    image: 'placeholder-rect.jpeg',
    items: [
      'Bikini',
      'Brazilian',
      'Butt',
      'Underarm',
      'Half Arm',
      'Full Arm',
      'Upper Legs',
      'Lower Legs',
      'Full Legs',
      'Back',
      'Stomach',
      'Chest',
    ],
  },
];
