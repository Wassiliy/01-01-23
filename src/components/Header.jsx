import { motion } from 'framer-motion';
import logo from '../logo.svg';

const Header = () => {

    const pVariants = {
        hidden: {
            x: -1000,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
        }
    }

    const aVariants = {
        hidden: {
            x: 1000,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
        }
    }

    const liVariants = {
        hidden: {
            opacity: 0,
        },

        visible: (index) => ({
            opacity: 1,
            transition: {
                delay: index + 0.3,
            }
        })
    }

    const items = ['Какой-то текст 1', 'Какой-то текст 2', 'Какой-то текст 3']

    return (
        <header className="App-header">

            <motion.img
                src={logo}
                className="App-logo"
                alt="logo"
                // задаём анимацию
                animate={{ rotate: 360 }}
                // настройка анимации
                transition={{
                    delay: 2,
                    duration: 5,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                    repeatType: 'reverse',
                    type: 'tween'
                }}
            />

            <motion.p
                initial={'hidden'}
                animate={'visible'}

                transition={{
                    delay: 0.5,
                    duration: 1.7,
                    type: 'tween',
                    ease: 'backOut'
                }}
                variants={pVariants}
            >
                Edit <code>src/App.js</code> and save to reload.
            </motion.p>

            <motion.a
                initial={'hidden'}
                animate={'visible'}
                transition={{
                    delay: 0.5,
                    duration: 1.7,
                    type: 'tween',
                    ease: 'backOut',
                }}
                variants={aVariants}

                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </motion.a>

            <motion.a
                whileHover={{
                    scale: 1.3,
                    color: '#61dafb',
                    cursor: 'pointer'
                }}
            >
                Наведись на меня
            </motion.a>

            <ul>
                {
                    items.map((text, index) => (
                        <motion.li
                            initial={'hidden'}
                            animate={'visible'}
                            variants={liVariants}
                            custom={index}
                        >
                            {text}
                        </motion.li>
                    ))
                }
            </ul>

        </header>
    )
}

export default Header