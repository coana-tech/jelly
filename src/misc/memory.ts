import {options} from "../options";
import assert from "assert";
import * as v8 from "v8";
import logger from "./logger";

/**
 * Triggers garbage collection if option --gc is enabled and returns the current size of heap used in MB.
 */
export function getMemoryUsage(): number {
    if (options.gc) {
        assert(typeof gc === "function");
        gc();
    }
    const res = Math.ceil(process.memoryUsage().heapUsed / 1048576);
    if ((options.gc && logger.isInfoEnabled()) || logger.isVerboseEnabled())
        logger.info(`Memory usage: ${res}MB`);
    return res;
}

/**
 * Returns the heap size limit in MB.
 */
export function getMemoryLimit(): number {
    return Math.ceil(v8.getHeapStatistics().heap_size_limit / 1048576);
}
