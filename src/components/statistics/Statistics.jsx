import css from './Statistics.module.css'
 
export const Statistics = ({title, stats }) => {
    return (
        <section className={css.statistics}>
         { title && <h2 className="title">{title}</h2> }
        <ul className={css.stat_list}>
        {stats.map(({id, label , percentage}) => {
           return (<li key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
            </li>) 
        })}
        </ul>
      </section>
    )
}