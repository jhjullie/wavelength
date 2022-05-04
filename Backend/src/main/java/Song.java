import java.util.*;

public class Song {
    public String name;
    public String artist;

    public Song (String n, String a) {
        name = n;
        a = artist;
    }

    public boolean compareSong(Song s) {
        if (name.equalsIgnoreCase(s.name)) {
            if (artist.equalsIgnoreCase(s.artist)) {
                return true;
            }
        }

        return false;
    }

}
