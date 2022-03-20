module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended"
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"@typescript-eslint"
	],
	"rules": {
		"react/prop-types": "off",
		"react/react-in-jsx-scope": "off",
	// // 	"indent": [
	// // 		"error",
	// // 		"tab"
	// // 	],
	// 	// "linebreak-style": [
	// 	// 	"error",
	// 	// 	"windows"
	// 	// ],
	// 	// "quotes": [
	// 	// 	"error",
	// 	// 	"double"
	// 	// ],
	// 	// "semi": [
	// 	// 	"error",
	// 	// 	"always"
	// 	// ]
	}
};
