package com.antzuhl.zeus.core.common;

import java.io.File;


/**
 * Interface to generate Classes from source code
 */
public interface IDynamicCodeCompiler {
    Class compile(String sCode, String sName) throws Exception;

    Class compile(File file) throws Exception;
}