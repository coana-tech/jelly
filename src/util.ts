import Solver from "./analysis/solver";
import { ReachablePackagesResponse } from "./typings/ipc";

export function getReachablePackages(solver: Solver) {
  const packages: ReachablePackagesResponse["body"] = [];
  for (const p of solver.globalState.packageInfos.values())
    packages.push({
      name: p.name,
      version: p.version,
    });
  return packages;
}
