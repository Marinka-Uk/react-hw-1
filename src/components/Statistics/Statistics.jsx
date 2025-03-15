import styled from "./Statistics.module.css"

export const Statistics = ({title, stats})=>{
return (
    <section className={styled.statistics}>
  <h2 className={styled.title}>{title}</h2>

  <ul  className={styled.statList}> 
    {
        stats.map((stat)=>{
return  <li class={styled.item}>
<span className={styled.label}>{stat.label}</span>
<span className={styled.percentage}>{stat.percentage}</span>
</li>
        })
    }

  </ul>
</section>
)
}