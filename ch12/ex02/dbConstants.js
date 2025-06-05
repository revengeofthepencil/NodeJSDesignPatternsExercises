export const MONGO_AD_URL = process.env.MONGO_AD_URL || 'mongodb://localhost:27018/zIndexAD';
export const MONGO_EP_URL = process.env.MONGO_EP_URL || 'mongodb://localhost:27019/zIndexEP';
export const MONGO_QZ_URL = process.env.MONGO_QZ_URL || 'mongodb://localhost:27020/zIndexQZ';

export const getTargetKeyFromLetter = letter => {
	const uppercaseLetter = letter.toUpperCase();
	if (uppercaseLetter >= 'A' && uppercaseLetter <= 'D') return 'AD';
	if (uppercaseLetter <= 'P') return 'EP';
	return 'QZ';
};
