import { FlowSection } from "./Flowart";
function Statement(){
    return(
<FlowSection
          aria-label="La mission"
          style={{ backgroundColor: "#FFFFFF", color: "#fff" }}
        >
        
          <div>
            <h2
              className="
                text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] 
                text-black uppercase tracking-tight
              "
            >
              I build
              <br />
              Simple and
              <br />
              Clean.
            </h2>
          </div>
        </FlowSection>
    )
}
export default Statement;