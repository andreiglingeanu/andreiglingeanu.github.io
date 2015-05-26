// https://github.com/sindresorhus/multiline/blob/master/index.js
var reCommentContents = /\/\*!?(?:\@preserve)?[ \t]*(?:\r\n|\n)([\s\S]*?)(?:\r\n|\n)[ \t]*\*\//;

var multiline = function (fn) {
	if (typeof fn !== 'function') {
		throw new TypeError('Expected a function');
	}

	var match = reCommentContents.exec(fn.toString());

	if (!match) {
		throw new TypeError('Multiline comment missing.');
	}

	return match[1];
};

console.log(multiline(function () {/*
 _    _        _                                _           _    _                 _               _           _      _                    _.-'~~~~~~`-._
| |  | |      | |                              | |         | |  | |               | |             | |         (_)    | |                  /      ||      \
| |  | |  ___ | |  ___  ___   _ __ ___    ___  | |_  ___   | |_ | |__    ___    __| |  __ _  _ __ | | __  ___  _   __| |  ___            /       ||       \
| |/\| | / _ \| | / __|/ _ \ | '_ ` _ \  / _ \ | __|/ _ \  | __|| '_ \  / _ \  / _` | / _` || '__|| |/ / / __|| | / _` | / _ \          |        ||        |
\  /\  /|  __/| || (__| (_) || | | | | ||  __/ | |_| (_) | | |_ | | | ||  __/ | (_| || (_| || |   |   <  \__ \| || (_| ||  __/ _        | _______||_______ |
 \/  \/  \___||_| \___|\___/ |_| |_| |_| \___|  \__|\___/   \__||_| |_| \___|  \__,_| \__,_||_|   |_|\_\ |___/|_| \__,_| \___|( )       |/ ----- \/ ----- \|
                                        _                            _                                                        |/        /  (     )  (     )  \
                                       | |                          | |                                                                / \  ----- () -----  / \
                                       | |_  _ __  __ _ __   __ ___ | |  ___  _ __                                                    /   \      /||\      /   \
                                       | __|| '__|/ _` |\ \ / // _ \| | / _ \| '__|                                                  /     \    /||||\    /     \
                                       | |_ | |  | (_| | \ V /|  __/| ||  __/| | _                                                  /       \  /||||||\  /       \
                                        \__||_|   \__,_|  \_/  \___||_| \___||_|(_)                                                /_        \o========o/        _\
                                                                                                                                     `--...__|`-._  _.-'|__...--'
I'd love to hear any one at andrei.glingeanu@gmail.com!                                                                                      |    `'    |             -U

- @AGlingeanu
*/}));

