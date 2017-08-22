package com.xstudio.school.infrastructure.log;

import java.time.LocalDateTime;

/**
 * Created by hbxia on 2017/3/23.
 */
public class TraceLogBuilder {

    private static final ThreadLocal<StringBuilder> traceLogBuilder = ThreadLocal.withInitial(() -> new StringBuilder(16 * 1024));
    private static final ThreadLocal<Integer> sequence = ThreadLocal.withInitial(() -> 0);

    /**
     *
     */
    public static void start() {
        clear();
    }

    /**
     *
     * @return
     */
    public static String end() {
        String message = traceLogBuilder.get().toString();
        clear();
        return message;
    }

    /**
     *
     * @param message
     */
    public static void appendLine(String message) {
        appendLine(message, null);
    }

    /**
     *
     * @param message
     * @param args
     */
    public static void appendLine(String message, Object... args) {
        appendFormat(message, true, args);
    }

    /**
     *
     * @param message
     */
    public static void append(String message) {
        append(message, null);
    }

    public static void append(String message, Object... args) {
        appendFormat(message, false, args);
    }

    /**
     *
     * @param message
     * @param args
     */
    private static void appendFormat(String message, boolean isNewLine, Object... args) {
        if (args != null && args.length > 0) {
            message = String.format(message, args);
        }
        String prefix = "";
        if (isNewLine) {
            String newLineStr = "\r\n";
            Long threadId = Thread.currentThread().getId();
            prefix = String.format("%s[%s][%s][%s]:", newLineStr, threadId, LocalDateTime.now().toString(), increaseSequence());
        }
        traceLogBuilder.get().append(prefix + message);
    }

    /**
     *
     */
    private static void clear() {
        String message = traceLogBuilder.get().toString();
        traceLogBuilder.get().delete(0, message.length());
        sequence.set(0);
    }

    /**
     *
     * @return
     */
    private static Integer increaseSequence() {
        Integer seq = sequence.get();
        ++seq;
        sequence.set(seq);
        return seq;
    }
}
