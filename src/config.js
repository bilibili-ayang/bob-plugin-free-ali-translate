const languages = [
	["auto"],
	["zh-Hans", "zh"],
	["zh-Hant", "tw"],
	["gos"],
	["bem"],
	["jv"],
	["ber"],
	["ace"],
	["ast"],
	["rue"],
	["zu"],
	["ja"],
	["iu"],
	["chm"],
	["is"],
	["it"],
	["chr"],
	["io"],
	["za"],
	["ii"],
	["kha"],
	["ig"],
	["ie"],
	["pap"],
	["haw"],
	["id"],
	["ia"],
	["yo"],
	["tyv"],
	["pag"],
	["yi"],
	["hy"],
	["umb"],
	["yue"],
	["lv"],
	["lt"],
	["syr"],
	["ln"],
	["lo"],
	["hbs"],
	["shn"],
	["li"],
	["quc"],
	["lg"],
	["lb"],
	["la"],
	["hsb"],
	["ky"],
	["bho"],
	["kw"],
	["war"],
	["ku"],
	["ks"],
	["kr"],
	["ko"],
	["km"],
	["kn"],
	["kk"],
	["szl"],
	["kl"],
	["kg"],
	["ka"],
	["fr"],
	["wa"],
	["fo"],
	["hup"],
	["fj"],
	["fi"],
	["fa"],
	["vo"],
	["tlh"],
	["byn"],
	["vi"],
	["eu"],
	["es"],
	["et"],
	["ve"],
	["eo"],
	["en"],
	["other"],
	["el"],
	["zza"],
	["uz"],
	["ee"],
	["ur"],
	["uk"],
	["dv"],
	["ug"],
	["ht"],
	["hu"],
	["toi"],
	["hi"],
	["he"],
	["ha"],
	["xh"],
	["gu"],
	["gv"],
	["tpi"],
	["gn"],
	["gl"],
	["cnr"],
	["gd"],
	["ga"],
	["wo"],
	["nch"],
	["fy"],
	["mai"],
	["hil"],
	["sa"],
	["bn"],
	["bo"],
	["bm"],
	["fur"],
	["bi"],
	["bg"],
	["rw"],
	["be"],
	["ru"],
	["ba"],
	["rn"],
	["ro"],
	["rm"],
	["ay"],
	["nds"],
	["az"],
	["as"],
	["ar"],
	["am"],
	["an"],
	["ak"],
	["ilo"],
	["fvr"],
	["qu"],
	["af"],
	["ab"],
	["mus"],
	["gil"],
	["kab"],
	["ty"],
	["tt"],
	["de"],
	["tr"],
	["ts"],
	["da"],
	["to"],
	["udm"],
	["tl"],
	["cy"],
	["tk"],
	["th"],
	["ti"],
	["cv"],
	["tg"],
	["cs"],
	["te"],
	["co"],
	["ta"],
	["cbk"],
	["mfe"],
	["inh"],
	["sw"],
	["ch"],
	["dtp"],
	["su"],
	["sv"],
	["st"],
	["ca"],
	["sq"],
	["ang"],
	["sr"],
	["crh"],
	["so"],
	["ltg"],
	["sm"],
	["sn"],
	["sk"],
	["ngu"],
	["sl"],
	["si"],
	["sg"],
	["rom"],
	["se"],
	["br"],
	["bs"],
	["sd"],
	["fil"],
	["hmn"],
	["ny"],
	["bal"],
	["nv"],
	["no"],
	["nl"],
	["csb"],
	["ne"],
	["tvl"],
	["my"],
	["ms"],
	["tet"],
	["mt"],
	["mr"],
	["mn"],
	["mk"],
	["ml"],
	["niu"],
	["mi"],
	["mg"],
	["sco"],
	["mh"],
	["pmn"],
	["pt"],
	["ceb"],
	["ps"],
	["pl"],
	["kdx"],
	["jbo"],
	["lfn"],
	["pa"],
	["iba"],
	["os"],
	["or"],
	["om"],
	["oj"],
	["kek"],
	["oc"],
].map((language) =>
	language.length > 1 ? language : [language[0], language[0]]
);

exports.languages = languages;
