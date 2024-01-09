
// import "@/components/comp1/comp1.scss"

import styles from "./comp1.module.scss"
function Comp1(){
    return(
        <div className={styles.box}>
            <p>这里是comp1的内容</p>
        </div>
    )
}
export default Comp1