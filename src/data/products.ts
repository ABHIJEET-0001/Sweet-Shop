// Product images
import rasgullaImg from '@/assets/products/rasgulla.jpg';
import gulabJamunImg from '@/assets/products/gulab-jamun.jpg';
import kajuKatliImg from '@/assets/products/kaju-katli.jpg';
import milkCakeImg from '@/assets/products/milk-cake.jpg';
import pedaImg from '@/assets/products/peda.jpg';
import barfiImg from '@/assets/products/barfi.jpg';
import besanLadduImg from '@/assets/products/besan-laddu.jpg';
import motichoorLadduImg from '@/assets/products/motichoor-laddu.jpg';
import rasmalaiImg from '@/assets/products/rasmalai.jpg';
import kalakandImg from '@/assets/products/kalakand.jpg';
import malaiChopImg from '@/assets/products/malai-chop.jpg';
import khoyaPedaImg from '@/assets/products/khoya-peda.jpg';
import coconutBarfiImg from '@/assets/products/coconut-barfi.jpg';
import dryFruitLadduImg from '@/assets/products/dry-fruit-laddu.jpg';
import soanPapdiImg from '@/assets/products/soan-papdi.jpg';
import mawaRollImg from '@/assets/products/mawa-roll.jpg';

import vanillaIcecreamImg from '@/assets/products/vanilla-icecream.jpg';
import chocolateIcecreamImg from '@/assets/products/chocolate-icecream.jpg';
import strawberryIcecreamImg from '@/assets/products/strawberry-icecream.jpg';
import mangoIcecreamImg from '@/assets/products/mango-icecream.jpg';
import butterscotchIcecreamImg from '@/assets/products/butterscotch-icecream.jpg';
import blackCurrantIcecreamImg from '@/assets/products/black-currant-icecream.jpg';
import pistaIcecreamImg from '@/assets/products/pista-icecream.jpg';
import kesarIcecreamImg from '@/assets/products/kesar-icecream.jpg';
import rajbhogIcecreamImg from '@/assets/products/rajbhog-icecream.jpg';
import tuttiFruttiIcecreamImg from '@/assets/products/tutti-frutti-icecream.jpg';
import coffeeIcecreamImg from '@/assets/products/coffee-icecream.jpg';
import cookiesCreamIcecreamImg from '@/assets/products/cookies-cream-icecream.jpg';
import chocolateChipsIcecreamImg from '@/assets/products/chocolate-chips-icecream.jpg';
import sitaphalIcecreamImg from '@/assets/products/sitaphal-icecream.jpg';
import rabdiIcecreamImg from '@/assets/products/rabdi-icecream.jpg';
import sugarFreeVanillaIcecreamImg from '@/assets/products/sugar-free-vanilla-icecream.jpg';

import chocolateCakeImg from '@/assets/products/chocolate-cake.jpg';
import vanillaCakeImg from '@/assets/products/vanilla-cake.jpg';
import strawberryCakeImg from '@/assets/products/strawberry-cake.jpg';
import blackForestCakeImg from '@/assets/products/black-forest-cake.jpg';
import whiteForestCakeImg from '@/assets/products/white-forest-cake.jpg';
import pineappleCakeImg from '@/assets/products/pineapple-cake.jpg';
import butterscotchCakeImg from '@/assets/products/butterscotch-cake.jpg';
import iceCreamCakeImg from '@/assets/products/ice-cream-cake.jpg';
import pureVegCakeImg from '@/assets/products/pure-veg-cake.jpg';
import designerBirthdayCakeImg from '@/assets/products/designer-birthday-cake.jpg';

export interface Product {
  id: string;
  name: string;
  nameHindi: string;
  price: number;
  category: 'sweets' | 'icecream' | 'cakes';
  description?: string;
  color?: string;
  image?: string;
}

export const sweets: Product[] = [
  { id: 'sweet-1', name: 'Rasgulla', nameHindi: 'रसगुल्ला', price: 40, category: 'sweets', color: '#FFF8E7', image: rasgullaImg },
  { id: 'sweet-2', name: 'Gulab Jamun', nameHindi: 'गुलाब जामुन', price: 35, category: 'sweets', color: '#8B4513', image: gulabJamunImg },
  { id: 'sweet-3', name: 'Kaju Katli', nameHindi: 'काजू कतली', price: 800, category: 'sweets', color: '#F5DEB3', image: kajuKatliImg },
  { id: 'sweet-4', name: 'Milk Cake', nameHindi: 'मिल्क केक', price: 450, category: 'sweets', color: '#DEB887', image: milkCakeImg },
  { id: 'sweet-5', name: 'Peda', nameHindi: 'पेड़ा', price: 400, category: 'sweets', color: '#FFE4B5', image: pedaImg },
  { id: 'sweet-6', name: 'Barfi', nameHindi: 'बर्फी', price: 350, category: 'sweets', color: '#FFFAF0', image: barfiImg },
  { id: 'sweet-7', name: 'Besan Laddu', nameHindi: 'बेसन लड्डू', price: 380, category: 'sweets', color: '#DAA520', image: besanLadduImg },
  { id: 'sweet-8', name: 'Motichoor Laddu', nameHindi: 'मोतीचूर लड्डू', price: 420, category: 'sweets', color: '#FFA500', image: motichoorLadduImg },
  { id: 'sweet-9', name: 'Rasmalai', nameHindi: 'रसमलाई', price: 60, category: 'sweets', color: '#FFFACD', image: rasmalaiImg },
  { id: 'sweet-10', name: 'Kalakand', nameHindi: 'कलाकंद', price: 450, category: 'sweets', color: '#FFF8DC', image: kalakandImg },
  { id: 'sweet-11', name: 'Malai Chop', nameHindi: 'मलाई चोप', price: 50, category: 'sweets', color: '#FAEBD7', image: malaiChopImg },
  { id: 'sweet-12', name: 'Khoya Peda', nameHindi: 'खोया पेड़ा', price: 420, category: 'sweets', color: '#F5DEB3', image: khoyaPedaImg },
  { id: 'sweet-13', name: 'Coconut Barfi', nameHindi: 'नारियल बर्फी', price: 320, category: 'sweets', color: '#FFFFFF', image: coconutBarfiImg },
  { id: 'sweet-14', name: 'Dry Fruit Laddu', nameHindi: 'ड्राई फ्रूट लड्डू', price: 650, category: 'sweets', color: '#CD853F', image: dryFruitLadduImg },
  { id: 'sweet-15', name: 'Soan Papdi', nameHindi: 'सोन पापड़ी', price: 280, category: 'sweets', color: '#FFE4C4', image: soanPapdiImg },
  { id: 'sweet-16', name: 'Mawa Roll', nameHindi: 'मावा रोल', price: 480, category: 'sweets', color: '#DEB887', image: mawaRollImg },
];

export const icecreams: Product[] = [
  { id: 'ice-1', name: 'Vanilla', nameHindi: 'वनीला', price: 60, category: 'icecream', color: '#FFFACD', image: vanillaIcecreamImg },
  { id: 'ice-2', name: 'Chocolate', nameHindi: 'चॉकलेट', price: 70, category: 'icecream', color: '#8B4513', image: chocolateIcecreamImg },
  { id: 'ice-3', name: 'Strawberry', nameHindi: 'स्ट्रॉबेरी', price: 70, category: 'icecream', color: '#FFB6C1', image: strawberryIcecreamImg },
  { id: 'ice-4', name: 'Mango', nameHindi: 'आम', price: 80, category: 'icecream', color: '#FFD700', image: mangoIcecreamImg },
  { id: 'ice-5', name: 'Butterscotch', nameHindi: 'बटरस्कॉच', price: 75, category: 'icecream', color: '#DEB887', image: butterscotchIcecreamImg },
  { id: 'ice-6', name: 'Black Currant', nameHindi: 'ब्लैक करंट', price: 80, category: 'icecream', color: '#4B0082', image: blackCurrantIcecreamImg },
  { id: 'ice-7', name: 'Pista', nameHindi: 'पिस्ता', price: 90, category: 'icecream', color: '#98FB98', image: pistaIcecreamImg },
  { id: 'ice-8', name: 'Kesar', nameHindi: 'केसर', price: 100, category: 'icecream', color: '#FF8C00', image: kesarIcecreamImg },
  { id: 'ice-9', name: 'Rajbhog', nameHindi: 'राजभोग', price: 100, category: 'icecream', color: '#FFE4B5', image: rajbhogIcecreamImg },
  { id: 'ice-10', name: 'Tutti Frutti', nameHindi: 'टूटी फ्रूटी', price: 70, category: 'icecream', color: '#FF69B4', image: tuttiFruttiIcecreamImg },
  { id: 'ice-11', name: 'Coffee', nameHindi: 'कॉफ़ी', price: 75, category: 'icecream', color: '#6F4E37', image: coffeeIcecreamImg },
  { id: 'ice-12', name: 'Cookies & Cream', nameHindi: 'कुकीज़ एंड क्रीम', price: 85, category: 'icecream', color: '#F5F5DC', image: cookiesCreamIcecreamImg },
  { id: 'ice-13', name: 'Chocolate Chips', nameHindi: 'चॉकलेट चिप्स', price: 85, category: 'icecream', color: '#D2691E', image: chocolateChipsIcecreamImg },
  { id: 'ice-14', name: 'Sitaphal', nameHindi: 'सीताफल', price: 90, category: 'icecream', color: '#9ACD32', image: sitaphalIcecreamImg },
  { id: 'ice-15', name: 'Rabdi', nameHindi: 'रबड़ी', price: 95, category: 'icecream', color: '#FFEFD5', image: rabdiIcecreamImg },
  { id: 'ice-16', name: 'Sugar-Free Vanilla', nameHindi: 'शुगर-फ्री वनीला', price: 80, category: 'icecream', color: '#F0FFF0', image: sugarFreeVanillaIcecreamImg },
];

export const cakes: Product[] = [
  { id: 'cake-1', name: 'Chocolate Cake', nameHindi: 'चॉकलेट केक', price: 600, category: 'cakes', color: '#4A2C2A', image: chocolateCakeImg },
  { id: 'cake-2', name: 'Vanilla Cake', nameHindi: 'वनीला केक', price: 550, category: 'cakes', color: '#FFFACD', image: vanillaCakeImg },
  { id: 'cake-3', name: 'Strawberry Cake', nameHindi: 'स्ट्रॉबेरी केक', price: 650, category: 'cakes', color: '#FFB6C1', image: strawberryCakeImg },
  { id: 'cake-4', name: 'Black Forest', nameHindi: 'ब्लैक फॉरेस्ट', price: 700, category: 'cakes', color: '#3D0C02', image: blackForestCakeImg },
  { id: 'cake-5', name: 'White Forest', nameHindi: 'व्हाइट फॉरेस्ट', price: 700, category: 'cakes', color: '#FFFAF0', image: whiteForestCakeImg },
  { id: 'cake-6', name: 'Pineapple Cake', nameHindi: 'पाइनएप्पल केक', price: 600, category: 'cakes', color: '#FFD700', image: pineappleCakeImg },
  { id: 'cake-7', name: 'Butterscotch Cake', nameHindi: 'बटरस्कॉच केक', price: 650, category: 'cakes', color: '#DEB887', image: butterscotchCakeImg },
  { id: 'cake-8', name: 'Ice Cream Cake', nameHindi: 'आइसक्रीम केक', price: 800, category: 'cakes', color: '#FFF0F5', image: iceCreamCakeImg },
  { id: 'cake-9', name: 'Pure Veg Cream Cake', nameHindi: 'प्योर वेज क्रीम केक', price: 650, category: 'cakes', color: '#FFF8DC', image: pureVegCakeImg },
  { id: 'cake-10', name: 'Designer Birthday Cake', nameHindi: 'डिज़ाइनर बर्थडे केक', price: 1200, category: 'cakes', color: '#FF69B4', image: designerBirthdayCakeImg },
];

export const allProducts = [...sweets, ...icecreams, ...cakes];

export const bestSellers = [
  sweets[2], // Kaju Katli
  sweets[7], // Motichoor Laddu
  sweets[1], // Gulab Jamun
  icecreams[3], // Mango
  cakes[3], // Black Forest
  sweets[8], // Rasmalai
];
