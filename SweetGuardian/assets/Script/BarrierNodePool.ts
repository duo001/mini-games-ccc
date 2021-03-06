const {ccclass, property} = cc._decorator;

@ccclass
export class BarrierNodePool extends cc.Component{
    @property(String)
    nodePoolName:string = "";
    @property(Number)
    initPollCount: number = 0;

    @property(cc.Prefab)
    prefab: cc.Prefab = null
}