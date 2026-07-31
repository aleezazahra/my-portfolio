import { FlowSection } from "./Flowart";
function Statement(){
    return(
<FlowSection
          aria-label="La mission"
          style={{ backgroundColor: "#FFFFFF", color: "#fff" }}
        >
        
          <div className="flex min-h-[calc(100svh-5rem)] items-center">
            <h2
              className="
                text-[clamp(2.8rem,13vw,14rem)] font-bold leading-[0.88]
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
