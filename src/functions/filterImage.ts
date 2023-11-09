import albedoImage from "../assets/albedo.webp";
import amberImage from "../assets/amber.webp";
import aratakiIttoImage from "../assets/arataki_itto.webp";
import ayakaImage from "../assets/ayaka.webp";
import ayatoImage from "../assets/ayato.webp";
import baizhuImage from "../assets/baizhu.webp";
import barbaraImage from "../assets/barbara.webp";
import beidouImage from "../assets/beidou.webp";
import bennettImage from "../assets/bennett.webp";
import candaceImage from "../assets/candace.webp";
import chongyunImage from "../assets/chongyun.webp";
import colleiImage from "../assets/collei.webp";
import cynoImage from "../assets/cyno.webp";
import dehyaImage from "../assets/dehya.webp";
import dilucImage from "../assets/diluc.webp";
import dionaImage from "../assets/diona.webp";
import doriImage from "../assets/dori.webp";
import eulaImage from "../assets/eula.webp";
import fischlImage from "../assets/fischl.webp";
import ganyuImage from "../assets/ganyu.webp";
import huTaoImage from "../assets/hu_tao.webp";
import jeanImage from "../assets/jean.webp";
import kaedeharaKazuhaImage from "../assets/kaedehara_kazuha.webp";
import kaeyaImage from "../assets/kaeya.webp";
import keqingImage from "../assets/keqing.webp";
import kokomiImage from "../assets/kokomi.webp";
import kleeImage from "../assets/klee.webp";
import kujouSaraImage from "../assets/kujou_sara.webp";
import lisaImage from "../assets/lisa.webp";
import monaImage from "../assets/mona.webp";
import nahidaImage from "../assets/nahida.webp";
import nilouImage from "../assets/nilou.webp";
import ningguangImage from "../assets/ningguang.webp";
import noelleImage from "../assets/noelle.webp";
import paimonImage from "../assets/paimon.webp";
import qiqiImage from "../assets/qiqi.webp";
import raidenShogunImage from "../assets/raiden_shogun.webp";
import razorImage from "../assets/razor.webp";
import rosariaImage from "../assets/rosaria.webp";
import shenheImage from "../assets/shenhe.webp";
import sucroseImage from "../assets/sucrose.webp";
import tartagliaImage from "../assets/tartaglia.webp";
import tighnariImage from "../assets/tighnari.webp";
import ventiImage from "../assets/venti.webp";
import wandererImage from "../assets/wanderer.webp";
import xianglingImage from "../assets/xiangling.webp";
import xiaoImage from "../assets/xiao.webp";
import xingqiuImage from "../assets/xingqiu.webp";
import yaeMikoImage from "../assets/yae_miko.webp";
import yanfeiImage from "../assets/yanfei.webp";
import yaoyaoImage from "../assets/yaoyao.webp";
import yoimiyaImage from "../assets/yoimiya.webp";
import zhongliImage from "../assets/zhongli.webp";

// Hashmap for all available TCG character card
const charImageMap: { [key: string]: string } = {
	albedo: albedoImage,
	amber: amberImage,
	"arataki-itto": aratakiIttoImage,
	ayaka: ayakaImage,
	ayato: ayatoImage,
	baizhu: baizhuImage,
	barbara: barbaraImage,
	beidou: beidouImage,
	bennett: bennettImage,
	candace: candaceImage,
	chongyun: chongyunImage,
	collei: colleiImage,
	cyno: cynoImage,
	dehya: dehyaImage,
	diluc: dilucImage,
	diona: dionaImage,
	dori: doriImage,
	eula: eulaImage,
	fischl: fischlImage,
	ganyu: ganyuImage,
	"hu-tao": huTaoImage,
	jean: jeanImage,
	kazuha: kaedeharaKazuhaImage,
	kaeya: kaeyaImage,
	keqing: keqingImage,
	kokomi: kokomiImage,
	klee: kleeImage,
	lisa: lisaImage,
	mona: monaImage,
	nahida: nahidaImage,
	nilou: nilouImage,
	ningguang: ningguangImage,
	noelle: noelleImage,
	paimon: paimonImage,
	qiqi: qiqiImage,
	raiden: raidenShogunImage,
	razor: razorImage,
	rosaria: rosariaImage,
	sara: kujouSaraImage,
	shenhe: shenheImage,
	sucrose: sucroseImage,
	tartaglia: tartagliaImage,
	tighnari: tighnariImage,
	venti: ventiImage,
	wanderer: wandererImage,
	xiangling: xianglingImage,
	xiao: xiaoImage,
	xingqiu: xingqiuImage,
	"yae-miko": yaeMikoImage,
	yanfei: yanfeiImage,
	yaoyao: yaoyaoImage,
	yoimiya: yoimiyaImage,
	zhongli: zhongliImage,
};

function filterImage(charList: string[]) {
	// Set regex so we can test if current charImg is 'paimon.webp' (i.e. official TCG img doesn't exist...as of 11/9/2023)
	const regex = /paimon\.webp/;

	// Filter for all character that exist within the hashmap.
	// This way we can only get those character that have the official TCG image released
	const filteredList = charList.filter((charName) => {
		const imageFound = charImageMap[charName] || paimonImage;
		return !regex.test(imageFound); 
	});
	return filteredList;
}

export { filterImage, charImageMap };
