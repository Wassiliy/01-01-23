import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Selector = (props) => {

    const [isVisible, setIsVisible] = React.useState(false)

    const clickVisibility = () => setIsVisible(!isVisible)

    return (
        <>
            <div
                onClick={clickVisibility}
                style={{
                    backgroundColor: '#ddd',
                    width: '300px',
                    padding: '15px',
                }}
            >
                {props.title}

                <AnimatePresence>
                    {
                        isVisible &&
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}

                            style={{overflow: 'hidden'}}
                            transition={{ duration: 1 }}
                        >
                            <div style={{
                                padding: '15px',
                                fontSize: '14px',
                                backgroundColor: 'white',
                                marginTop: '15px'
                            }}>
                                {props.children}
                            </div>
                        </motion.div>
                    }
                </AnimatePresence>
            </div>
        </>
    )
}

export default Selector